import { Data } from "../utils/data";

export class Main {
    private container: HTMLElement | null;
    private classes: string[];

    constructor(
        containerSelector: string,
        classes: string[],
    ) {
        this.container = document.querySelector(containerSelector);
        this.classes = classes;
    }

    clear(): void {

        if (this.container?.firstChild) {
            const body = document.querySelector('.body');
            if (body) {
                this.container.removeChild(body);
            }
        }
    }

    render(datas: Data): void {
        const body = document.createElement("div");
        const content = document.createElement("div");

        const h1 = document.createElement("h1");
        h1.textContent = datas.topic
        body.classList.add(this.classes[0])
        body.appendChild(h1);
        if (datas.about) {
            datas.about.forEach((data) => {
                const block = document.createElement("div");
                const title = document.createElement("h3");
                const company = document.createElement("h2");
                const h5 = document.createElement("h5");
                const date = document.createElement("p");

                if (data.title) {
                    title.textContent = data.title;
                    block.appendChild(title)
                }

                if (data.qualities) {
                    h5.textContent = data.qualities;
                    block.appendChild(h5)
                }

                if (data.personal_details) {
                    data.personal_details.forEach(item => {
                        const div = document.createElement("div");
                        const img = document.createElement("img");
                        let network;

                        if (item.selector === "a") {
                            network = document.createElement(item.selector);
                            network.id = item.text;
                            network.textContent = item.text;
                            network.href = item.network;
                            img.src = item.logo;
                            img.alt = item.alt;
                            img.setAttribute('crs', "image-crs");
                            div.appendChild(img);
                            div.appendChild(network);
                            block.appendChild(div);
                        }
                        if (item.selector === "h5") {
                            network = document.createElement(item.selector);
                            network.id = item.text;
                            network.textContent = `${item.network}`;
                            img.src = item.logo;
                            img.alt = item.alt;
                            img.setAttribute('crs', "image-crs");
                            div.appendChild(img);
                            div.appendChild(network);
                            block.appendChild(div);
                        }
                    })
                }

                if (data.languages) {
                    h5.textContent = data.languages;
                    block.appendChild(h5)
                }

                if (data.skils) {
                    data.skils.forEach(skil => {
                        const div = document.createElement("div");
                        const lang = document.createElement("p");
                        const img = document.createElement("img");
                        img.src = skil.logo
                        img.alt = skil.alt
                        img.classList.add('.img')
                        img.setAttribute('crs', "image-crs");
                        lang.id = "skil"
                        lang.textContent = skil.lang
                        div.appendChild(img)
                        div.appendChild(lang)
                        for (let i = 1; i <= 5; i++) {
                            const rate = document.createElement("i");
                            if (i <= skil.rate && datas.done) {
                                rate.classList.add(datas.done[0])
                                rate.classList.add(datas.done[1])
                            }
                            if (i > skil.rate && datas.not) {
                                rate.classList.add(datas.not[0])
                                rate.classList.add(datas.not[1])
                            }

                            div.appendChild(rate)
                        }

                        block.appendChild(div)
                    })
                }

                if (data.company) {
                    company.textContent = data.company;
                }
                if (data.descripion) {
                    h5.textContent = data.descripion
                    block.appendChild(h5)
                }

                if (data?.startDate && data?.finishDate) {
                    date.textContent = `${data?.startDate} - ${data?.finishDate}`
                    block.appendChild(date)
                }


                if (data.company) {
                    block.appendChild(company)
                }

                content.appendChild(block)
                body.appendChild(content)
            });
        }

        this.container?.appendChild(body)
    }
}
