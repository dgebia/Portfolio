export class Container {
  private container: HTMLElement | null;
  private navbar: HTMLElement;
  private burger: HTMLElement;
  private header: HTMLElement;
  private main: HTMLElement;
  private footer: HTMLElement;

  constructor(containerSelector: string) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      throw new Error('Container not found in class Container.');
    }

    this.navbar = this.createDiv('navbar');
    this.burger = this.createDiv('burger');
    this.header = this.createDiv('header');
    this.main = this.createDiv('main');
    this.footer = this.createDiv('footer');
  }

  private createDiv(className: string): HTMLElement {
    const div = document.createElement('div');
    div.classList.add(className);
    return div
  }

  render() {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(this.navbar)
    fragment.appendChild(this.burger)
    fragment.appendChild(this.header)
    fragment.appendChild(this.main)
    fragment.appendChild(this.footer)


    this.container?.appendChild(fragment);
  }

  getContainerElement() {
    return this.container;
  }

  getBurgElement() {
    return this.burger;
  }
}
