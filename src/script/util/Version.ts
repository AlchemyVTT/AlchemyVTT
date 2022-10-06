export class Version {
    string: string;
    major : number;
    minor : number;
    patch : number;

    constructor(v ?: any) {
        this.string = v?.string || Version.STRING
        this.major  = v?.major  || Version.MAJOR
        this.minor  = v?.minor  || Version.MINOR
        this.patch  = v?.patch  || Version.PATCH
    }

    public toString() {
        return Version.toString(this)
    }
}

export namespace Version {
    export const STRING  : string  = 'Alchemy'
    export const MAJOR   : number  = 0
    export const MINOR   : number  = 0
    export const PATCH   : number  = 0
    export const CURRENT : Version = new Version()

    export function toString(a:Version) {
        return `${a.string} ${a.major}.${a.minor}.${a.patch}`
    }
    
    export function compare(a:Version, b:Version, ignore:any = { }) {
        let k
        if(!ignore?.major  && (k = b.major - a.major) != 0) return k
        if(!ignore?.minor  && (k = b.minor - a.minor) != 0) return k
        if(!ignore?.patch  && (k = b.patch - a.patch) != 0) return k
        return 0
    }
}

export default { Version }