import { Data } from "../utils/interface";

export class Footer {
    private container: HTMLElement | null;
    private classes: string[];

    constructor(
        containerSelector: string,
        classes: string[]
    ) {
        this.container = document.querySelector(containerSelector);
        this.classes = classes;
    }

    render(data: Data): void {
        const header = document.createElement("div");
        const h4 = document.createElement("h3");

        header.classList.add(this.classes[0])
        h4.innerHTML = data.topic;
        header.appendChild(h4)

        data.stack?.forEach(item => {

            const img = document.createElement("img");
            img.src = item.logo
            img.alt = item.alt
            img.setAttribute('crs', "image-crs");
            // lang.id = "skil"
            header.appendChild(img)
        })

        this.container?.appendChild(header)
    }
}
