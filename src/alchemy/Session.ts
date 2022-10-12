import * as TRYSTERO from 'trystero'
import * as HASH     from 'jshashes'
import * as UUID     from 'uuid'


import * as Version from './Version'
import * as Magic   from './Magic'
import type Event   from './Event'

// : CLIENT | SERVER
export type  CLIENT = 'client'
export type  SERVER = 'server'
// === CLIENT
// === SERVER
export const CLIENT = 'client'
export const SERVER = 'server'

type PendingRequest = {
    peer: string
    // promise
    res: (val : any) => void
    rej: (val?: any) => void
}

export class Session {
    _is   : CLIENT | SERVER
    _id   : string
    _pw   : string
    _sc   : string
    _magic: string

    _rm: TRYSTERO.Room
    _tx: TRYSTERO.ActionSender  <Message>
    // _rx: TRYSTERO.ActionReceiver<Message>

    _clientId: string
    _serverId: string
    
    _pending: Map<string, PendingRequest>
    // session event listener
    _sel: Map<string, Event.Listener<SessionEvent>>
    // message event listener
    _mel: Map<string, Event.Listener<MessageEvent>>

    constructor() {
        this._pending = new Map()
        this._sel     = new Map()
        this._mel     = new Map()
    }

    public async tx(type: string, peer:string, data?: any, reqId?: string, resId?: string): Promise<Message> {
        return new Promise((res, rej) => {
            const msg: Message = { type, data, reqId, resId}
            if(reqId) this._pending.set(reqId, {
                peer, res, rej
            })
            this._tx(msg)
            if(!reqId)
            res(msg)
        })
    }

    public async message(type: string, peer: string, data?: any, resId?: string): Promise<Message> {
        const reqId: string = undefined
        return this.tx(type, peer, data, reqId, resId)
    }

    public async request(type: string, peer: string, data?: any, resId?: string): Promise<Message> {
        const reqId: string = UUID.v4()
        return this.tx(type, peer, data, reqId, resId)
    }

    public rx(type: string, listener: Event.Listener<MessageEvent>): void {
        this._mel.set(type, listener)
    }

    public on(type: string, listener: Event.Listener<SessionEvent>): void {
        this._sel.set(type, listener)
    }

    public is(is: SERVER | CLIENT) {
        return this._is === is
    }    

    public isClient() {
        return this.is(CLIENT)
    }

    public isServer() {
        return this.is(SERVER)
    }

    public id(): string {
        return this._id
    }

    public pw(): string {
        return this._pw
    }

    public sc(): string {
        return this._sc
    }

    public magic(): string {
        return this._magic
    }

    _rx(event: MessageEvent) {
        const req = event.resId && this._pending.get(event.resId)
        if(req) {
            this._pending.delete(event.resId)
            req.res(event)
        }
        const mel = this._mel.get(event.type)
        if(mel) mel(event)
    }

    _on(event: SessionEvent) {
        const sel = this._sel.get(event.type)
        if(sel) sel(event)
    }
}

export type Message = {
    type: string
    data:    any
    reqId?: string
    resId?: string
}

export type SessionEvent = {
    type: string,
    peer: string
}

export type MessageEvent = {
    type: string,
    peer: string,
    data:    any,
    reqId?: string,
    resId?: string
}

export namespace Session {
    const CLIENT_CONNECTED: string = 'client-connected'
    const SERVER_CONNECTED: string = 'server-connected'
    // inclue version major and minor so incompatible versions cannot connect
    export const APP_ID: string = `alchemyvtt-${Version.MAJOR}-${Version.MINOR}`

    export function join(magic  : string): Session {
        return _join(        Magic.rend(magic))
    }

    export function host(magic ?: string): Session {
        return _host(magic ? Magic.rend(magic) : [
            Magic.random(),
            Magic.random(),
            Magic.random()
        ])
    }
    
    export function _join([id, pw, sc]: [string, string, string]): Session {
        const session = new Session()

        session._is = CLIENT
        session._id = id
        session._pw = pw
        session._sc = sc
        session._magic = Magic.mend([id, pw, sc])

        session._rm = TRYSTERO.joinRoom({appId: APP_ID, password: pw}, id)
        const [tx, rx] = session._rm.makeAction<Message>('M')
        rx((msg, peer) => session._rx({...msg, peer}))
        session._tx = tx

        const
            K0 = new HASH.SHA1().hex(TRYSTERO.selfId + sc),
            K1 = new HASH.SHA1().hex(             K0 + sc);
        session.rx(K0, (msg) => {
            session.rx(K0, undefined)
            // server connected!
            session._serverId = msg.peer
            session._clientId = TRYSTERO.selfId
            session.message(K1, msg.peer, { }, msg.reqId)

            console.log(`Server [${msg.peer}] connected!`)
            session._on({type: SERVER_CONNECTED, peer: msg.peer})
        })

        return session
    }

    export function _host([id, pw, sc]: [string, string, string]): Session {
        const session = new Session()

        session._is = SERVER
        session._id = id
        session._pw = pw
        session._sc = sc
        session._magic = Magic.mend([id, pw, sc])

        session._rm = TRYSTERO.joinRoom({appId: APP_ID, password: pw}, id)
        const [tx, rx] = session._rm.makeAction<Message>('M')
        rx((msg, peer) => session._rx({...msg, peer}))
        session._tx = tx

        const selfId = TRYSTERO.selfId
        session._clientId   =   selfId
        session._serverId   =   selfId

        session._rm.onPeerJoin (async peerId => {
            const
                K0 = new HASH.SHA1().hex(peerId + sc),
                K1 = new HASH.SHA1().hex(    K0 + sc);
            const msg = await session.request(K0, peerId)
            if(msg.type === K1) {
                // client connected
                console.log(`Client '${peerId}' connected!`)
                session._on({type: CLIENT_CONNECTED, peer: peerId})
            }
        })
        session._rm.onPeerLeave(peerId => {
            
        })

        return session
    }
}

export default Session