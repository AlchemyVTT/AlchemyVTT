import * as UUID from 'uuid'
import * as MD5  from 'crypto-js/md5'
import * as B64  from 'crypto-js/enc-base64'

export class Asset {
    _uuid: string;
    _name: string;

    _data: string;
    _hash: string; //md5

    _meta: Asset.Metadata;

    // copy constructor
    public constructor(a ?: any) {
        if(!a) return;
        this._uuid = a._uuid || a.uuid || '';
        this._name = a._name || a.name || '';
        this._data = a._data || a.data || '';
        this._hash = a._hash || a.hash || '';
        this._meta = new Asset.Metadata(a._meta);
    }

    public uuid() : string {
        return this._uuid;
    }

    public name() : string {
        return this._name;
    }

    public data() : string {
        return this._data;
    }

    public hash() : string {
        return this._hash;
    }
    
    public meta() : Asset.Metadata {
        return this._meta;
    }    
}

export namespace Asset {

    export enum Type {
        MODEL,
        IMAGE,
        AUDIO
    }

    export class Metadata {
        _name : string;
        _type : string;
        _size : number;

        constructor(a ?: any) {
            if(!a) return;
            this._name = a._name || a.name || ''
            this._type = a._type || a.type || ''
            this._size = a._size || a.size ||  0
        }

        public name() : string {
            return this._name;
        }

        public type() : string {
            return this._type;
        }

        public size() : number {
            return this._size;
        }
    }

    export async function load(blob : Blob, {type: string}) : Promise<Asset> {
        if(!blob)
            throw ''

        const a = new Asset();

        // generate uuid
        a._uuid = UUID.v4();
        // generate name
        if(blob instanceof File) {
            console.log(blob.name.match(/\.[^/.]+$/)[0])
            // copy blob metadata
            a._meta._name = blob.name;

            a._name       = blob.name
                .replace(/\.[^/.]+$/, '')  // remove file extension
                .trim   (               ); // remove leading/trailing whitespace
        } else
            a._name = a._uuid;

        // read data
        a._data = await new Promise<string>((resolve, reject) => {

            const reader : FileReader = new FileReader();
            reader.addEventListener('load' , () => {
                resolve(<string> reader.result);
            })
            reader.addEventListener('error', () => {
                reject();
            })

            reader.readAsDataURL(blob);
        })
        // generate hash
        a._hash = MD5(a._data).toString(B64);
        // copy blob metadata
        a._meta._type = blob.type;
        a._meta._size = blob.size;

        return a
    }
}

export default Asset