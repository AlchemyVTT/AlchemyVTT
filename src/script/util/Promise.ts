export function ms(ms:number) : Promise<void> {
    return new Promise<void>( RESOLVE => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            RESOLVE()
        }, ms)
    })
}