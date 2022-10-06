import UUID from 'uuid';

export class Reagent {


    _uuid : string;
    
    // data heirarchy
    _inherits   :       string ;
    _inheritors : Array<string>;

    // scene heirarchy
    _parent   :       string ;
    _children : Array<string>;

    // properties
    _instanced : object;
    _inherited : object;
}

export namespace Reagent {

    const REAGENTS = new Map<string, Reagent>();



    

    export function newInstanced() : Reagent {
        return null;
    }

    export function newInherited() : Reagent {
        return null;
    }


    export function get(uuid : string) : Reagent {
        return null;
    }

    export function del(uuid : string) : void    {

    }

    export namespace Property {

        // GET
        export function get<T>(reagent : string, property : string) : T {
            return Property._get(Reagent.get(reagent), property);
        }
    
        export function getInstanced<T>(reagent : string, property : string) : T {
            return Property._getInstanced(Reagent.get(reagent), property);
        }
    
        export function getInherited<T>(reagent : string, property : string) : T {
            return Property._getInherited(Reagent.get(reagent), property);
        }

        export function _get<T>(reagent : Reagent, property : string) : T {
            return null;
        }

        export function _getInstanced<T>(reagent : Reagent, property : string) : T {
            return null;
        }

        export function _getInherited<T>(reagent : Reagent, property : string) : T {
            return null;
        }
    
        // SET
        export function set<T>(reagent : string, property : string, value : T) : T {
            return Property._set(Reagent.get(reagent), property, value);
        }
    
        export function setInstanced<T>(reagent : string, property : string, value : T) : T {
            return Property._setInstanced(Reagent.get(reagent), property, value);
        }
    
        export function setInherited<T>(reagent : string, property : string, value : T) : T {
            return Property._setInherited(Reagent.get(reagent), property, value);
        }

        export function _set<T>(reagent : Reagent, property : string, value : T) : T {
            return null;
        }
    
        export function _setInherited<T>(reagent : Reagent, property : string, value : T) : T {
            return null;
        }
    
        export function _setInstanced<T>(reagent : Reagent, property : string, value : T) : T {
            return null;
        }

        export function del(uuid : string, p : string) : void {

        }
    }
}

