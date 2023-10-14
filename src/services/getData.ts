export const getImage = async (fact: string) => {
    const factSplit = fact.split(" ")
    let fact4Word = ""
    for (let i = 0; i < 4; i++) {
        fact4Word+= `${factSplit[i]} `
    }
    const image = await fetch(`https://cataas.com/cat/says/${fact4Word}`)
    return image.url
}

export const getFact = async () => {
    const fact = await fetch("https://catfact.ninja/fact")
    const factJSON = await fact.json()
    return factJSON
}