import { Links } from "../utils/interface";


export class Navbar {
    private container: HTMLElement | null;
    private links: Links[];
    private classes: string[];
    private id: string[];

    constructor(containerSelector: string, links: Links[], classes: string[], id: string[]) {
        this.container = document.querySelector(containerSelector);
        this.links = links;
        this.classes = classes;
        this.id = id;
    }


    setIcon(): void {
        const ul = document.createElement("ul");
        ul.classList.add(this.classes[1])

        this.links.forEach((link, index) => {
            const li = document.createElement("li");
            const i = document.createElement("i");
            index === 0 && i.classList.add('active')

            for (let j = 0; j < link.iconClasses.length; j++) {
                i.classList.add(link.iconClasses[j])
                i.id = this.id[1];
            }

            li.appendChild(i);
            ul.appendChild(li);
        });

        this.container?.appendChild(ul);
    }

    setText(): void {
        const ul = document.createElement("ul");
        ul.classList.add(this.classes[2])

        this.links.forEach((link, index) => {
            const li = document.createElement("li");
            const anchor = document.createElement("a");
            index === 0 && anchor.classList.add('active')
            anchor.href = link.title
            anchor.textContent = link.title;
            anchor.id = this.id[0];

            li.appendChild(anchor);
            ul.appendChild(li);
        });

        this.container?.appendChild(ul);
    }

    clear(): void {
        const childe = this.container?.firstChild;
        childe ? this.container?.removeChild(childe) : null

    }

    getNavbarElement(): HTMLElement | null {
        return this.container
    }

    getFirstChild() {
        return this.container?.firstElementChild
    }

    getAnchorTags(idSelector: string | any) {
        return document.querySelectorAll(idSelector)
    }
}
