export class Burger {
    static render() {
        throw new Error("Method not implemented.");
    }
    private container: HTMLElement | null;
    private classes: string[];


    constructor(containerSelector: string, classes: string[]) {
        this.container = document.querySelector(containerSelector);
        this.classes = classes;
    }

    render(): void {
        const burger_container = document.createElement("div");
        const burger = document.createElement("div");


        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            burger.appendChild(span);
        }

        burger_container.classList.add(this.classes[0])
        burger.classList.add(this.classes[1])
        burger_container.appendChild(burger);

        this.container?.appendChild(burger_container);
    }

    getBurgerElement() {
        return this.container
    }

    getBurgElement() {
        return document.querySelector(`.${this.classes[1]}`);
    }

    getBurgerConteinerElement() {
        return document.querySelector(`.${this.classes[0]}`);
    }
}