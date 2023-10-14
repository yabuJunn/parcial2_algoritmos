import "./components/export"
import { putInfo } from "./utilities/putInfo";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const linkStylesheet = this.ownerDocument.createElement("link")
        linkStylesheet.setAttribute("rel", "stylesheet")
        linkStylesheet.setAttribute("href", "/src/index.css")
        this.shadowRoot?.appendChild(linkStylesheet)

        const title = this.ownerDocument.createElement("h1")
        title.innerText = "CATS GENERATOR"
        this.shadowRoot?.appendChild(title)

        const cardContainer = this.ownerDocument.createElement('div');
        cardContainer.setAttribute("id", "cardContainer")
        this.shadowRoot?.appendChild(cardContainer);

        const img = this.ownerDocument.createElement("img")
        img.setAttribute("src", "https://cataas.com/cat/says/Press the button!")
        cardContainer.appendChild(img)

        const text = this.ownerDocument.createElement("p")
        text.innerText = "Press the button to get a fact!"
        cardContainer.appendChild(text)

        const button = this.ownerDocument.createElement("button")
        button.innerHTML = "Get New Fact"
        cardContainer.appendChild(button)

        button.addEventListener("click", () => {
            putInfo(text, img)
        })


    }
}

customElements.define('app-container', AppContainer)