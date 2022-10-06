export function read(blob : Blob) : Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if(!blob) reject()

        const reader : FileReader = new FileReader()
        reader.addEventListener('onload' , () => {
            resolve(<string> reader.result)
        })
        reader.addEventListener('onerror', () => {
            reject()
        })

        reader.readAsDataURL(blob)
    })
}