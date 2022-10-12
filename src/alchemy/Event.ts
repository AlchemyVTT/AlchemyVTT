export namespace Event {
    export type Listener<T> = (event:T) => void
}

export default Event