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
    _verified: Array<string>
    
    _pending: Map<string, PendingRequest>
    // session event listener
    _sel: Map<string, Event.Listener<SessionEvent>>
    // message event listener
    _mel: Map<string, Event.Listener<MessageEvent>>

    constructor() {
        this._verified = new Array()
        this._pending  = new Map()
        this._sel      = new Map()
        this._mel      = new Map()
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

    _rx(msg: Message, peerId: string) {
        const req = msg.resId && this._pending.get(msg.resId)
        if(req) {
            this._pending.delete(msg.resId)
            req.res(msg)
        }

        // if unverified peer don't propogate
        if(this._serverId && !this._verified.includes(peerId))
            return
        if(this._mel.has(msg.type))
            this._mel.get(msg.type)({
                type : msg.type,
                peer :   peerId,
                data : msg.data,
                reqId: msg.reqId,
                resId: msg.resId
            })
    }
}




export type Message = {
    type: string
    data:    any
    reqId?: string
    resId?: string
}

export type SessionEvent = {

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
    // inclue version major and minor so incompatible version cannot connect
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
        // session._verified.push(TRYSTERO.selfId)
        session._clientId = TRYSTERO.selfId
        // session._serverId =    TRYSTERO.selfId        

        const [tx, rx] = session._rm.makeAction<Message>('M')
        session._tx = tx
        rx((msg, peer) => session._rx(msg, peer))

        const
            K0 = new HASH.SHA1().hex(TRYSTERO.selfId + sc),
            K1 = new HASH.SHA1().hex(             K0 + sc);
        session.rx(K0, (msg) => {
            session.rx(K0, undefined)
            // verified serverId
            session._serverId = msg.peer
            session._verified.push(session._serverId)
            session.message(K1, msg.peer, { }, msg.reqId)

            console.log(`Server [${msg.peer}] connected!`)

            session.rx(CLIENT_CONNECTED, (msg) => {
                session._verified.push(...msg.data)
                console.log(`Client [${msg.data}] connected!`)
                // notify client connection
            })
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
        // session._verified.push(TRYSTERO.selfId)
        session._clientId = TRYSTERO.selfId
        session._serverId = TRYSTERO.selfId
        const [tx, rx] = session._rm.makeAction<Message>('M')
        session._tx = tx
        rx((msg, peer) => session._rx(msg, peer))

        session._rm.onPeerJoin (async peerId => {
            const
                K0 = new HASH.SHA1().hex(peerId + sc),
                K1 = new HASH.SHA1().hex(    K0 + sc);
            const msg = await session.request(K0, peerId)

            if(msg.type === K1) {
                console.log(`Client [${peerId}] connected!`)

                if(session._verified.length > 0)
                    session.message(CLIENT_CONNECTED, peerId, session._verified)
                session._verified.forEach(clientId => {
                    session.message(CLIENT_CONNECTED, clientId, [peerId])
                })
                session._verified.push(peerId)

                // notify client connection
            }
        })
        session._rm.onPeerLeave(peerId => {
            
        })

        return session
    }
}

export default Session