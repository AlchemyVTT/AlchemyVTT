import { filter, sample, reject } from 'lodash'

export const DIGIT   = [...'0123456789']
export const UPPER   = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
export const LOWER   = [...'abcdefghijklmnopqrstuvwxyz']
export const SPECIAL = [...' -_']

export const Transform = {
    NONE: 'none',
    TO_UPPER: 'to-upper',
    TO_LOWER: 'to-lower',    
    TRIM: 'trim',
    TRIM_TO_LOWER: 'trim-to-lower',
    TRIM_TO_UPPER: 'trim-to-upper',
}

export function isString(string) {
    return string && typeof string === 'string'
}

export function random(length = 6, x=Transform.TRIM, charset=[...DIGIT, ...UPPER]) {
    let string = ''
    while(string.length < length) {
        string += sample(charset)
        if(string.length >= length)
            string = transform(string, x)
    }
    return string
}

export function check(string, x=Transform.TRIM, charset=[...DIGIT, ...UPPER, ...LOWER]) {
    if(!isString(string)) return false

    return reject([...transform(string, x)] , (t) => {
        return charset.includes(t)
    }).length === 0
}

export function clean(string, x=Transform.TRIM, charset=[...DIGIT, ...UPPER, ...LOWER]) {
    if(!isString(string)) return ''

    return filter([...transform(string, x)] , (t) => {
        return charset.includes(t)
    }).join('')
}

export function transform(string, x) {
    if(!isString(string)) return string
    switch(x) {        
        default:
        case Transform.NONE: return string
        case Transform.TO_UPPER: return string.toUpperCase()
        case Transform.TO_LOWER: return string.toLowerCase()
        case Transform.TRIM: return string.trim()
        case Transform.TRIM_TO_UPPER: return string.trim().toUpperCase()
        case Transform.TRIM_TO_LOWER: return string.trim().toLowerCase()
    }
}

export function mend([id, pw, sc]: [string, string, string], x = Transform.TRIM_TO_UPPER, charset = [...DIGIT,...UPPER]): string {
    const _id = clean(id, x, charset)
    const _pw = clean(pw, x, charset)
    const _sc = clean(sc, x, charset)
    const magic = `${_id}-${_pw}-${_sc}`

    return magic
}

export function rend(     magic : string , x = Transform.TRIM_TO_UPPER, charset = [...DIGIT,...UPPER]): [string, string, string] {
    if(!isString(magic)) return ['', '', '']

    const t = magic.split('-')
    return [
        t.length > 0 ? clean(t[0], x, charset) : '',
        t.length > 1 ? clean(t[1], x, charset) : '',
        t.length > 2 ? clean(t[2], x, charset) : ''
    ]
}