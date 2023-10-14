import { getFact, getImage } from "../services/getData"

export const putInfo = async (p: HTMLElement, img: HTMLElement) => {
    const fact = await getFact()
    const image = await getImage(fact.fact)
    img.setAttribute("src", image)
    p.innerText = fact.fact
}