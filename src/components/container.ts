export class Container {
    private container: HTMLElement | null;

    constructor(containerSelector: string,) {
        this.container = document.querySelector(containerSelector);
    }

    render() {
        const navbar = document.createElement('div');
        navbar.classList.add('navbar');

        const burger = document.createElement('div');
        burger.classList.add('burger');

        const header = document.createElement('div');
        header.classList.add('header');

        const main = document.createElement('div');
        main.classList.add('main');

        const footer = document.createElement('div');
        footer.classList.add('footer');
        footer.innerHTML = "footer"

        this.container?.appendChild(navbar);
        this.container?.appendChild(burger);
        this.container?.appendChild(header);
        this.container?.appendChild(main);
        this.container?.appendChild(footer);
    }

    getConteinerElement() {
        return this.container
    }

    getBurgElement() {

    }
} 