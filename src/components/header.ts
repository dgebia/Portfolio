export class Header {
    private container: HTMLElement | null;
    private classes: string[];

    constructor(
        containerSelector: string,
        classes: string[]
    ) {
        this.container = document.querySelector(containerSelector);
        this.classes = classes;
    }

    render(): void {
        const header = document.createElement("div");

        header.classList.add(this.classes[0])
        header.innerHTML = 'Stack';

        this.container?.insertBefore(header, this.container?.firstChild);
    }
}
