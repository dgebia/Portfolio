export class Burger {
  private container: HTMLElement | null;
  private burger: HTMLElement | null = null;
  private classes: string[];
  private onToggle?: ((isActive: boolean) => void) | null = null;

  constructor(containerSelector: string, classes: string[], onToggle?: (isActive: boolean) => void) {
    this.container = document.querySelector(containerSelector);
    this.classes = classes
    if (!this.container) {
      throw new Error('Container not found in class Burger.');
    }
    this.onToggle = onToggle;
    this.initBurger(classes);
  }

  private initBurger(classes: string[]): void {
    this.burger = document.createElement('div');
    this.burger.classList.add(...classes);
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      this.burger.appendChild(span);
    }
    this.burger.addEventListener('click', () => this.toggle());
    this.container?.appendChild(this.burger);
  }

  toggle(): void {
    if (!this.burger) {
      throw new Error('Burger element not found.');
    }
    const isActive = !this.burger.classList.contains('active');
    this.burger.classList.toggle('active');
    if (this.onToggle) {
      this.onToggle(isActive);
    }
  }


  getContainerElement() {
    return this.container;
  }

  getBurgElement() {
    return document.querySelector(`.${this.classes[1]}`);
  }

  getBurgerConteinerElement() {
    return document.querySelector(`.${this.classes[0]}`);
  }
}
