import      { readable, writable } from 'svelte/store'
import type { Readable, Writable } from 'svelte/store'
import { reduce } from 'lodash'

export const PATH_DELIMITER : string = '.';

export type Path = Array<Path> | string

export function create<T>(path : Path, t : T) : T {
    return null
}

export function get<T>(path : Path       ) : T {
    return null
}

export function set<T>(path : Path, t : T) : T {
    return null
}

export function rend(path : string) : Path {
    return path.split(PATH_DELIMITER);
}

export function mend(...path : Array<Path>) : string {
    let mended = path.length > 0 ? (Array.isArray(path[0]) ? mend(...path[0]) : path[0]): '';
    for(let i = 1; i < path.length; i ++)
        mended += PATH_DELIMITER + (Array.isArray(path[i]) ? mend(...path[i]) : path[i])    ;
    return mended;
}