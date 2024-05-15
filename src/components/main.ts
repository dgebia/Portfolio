import { Data } from '../utils/data';

export class Main {
  private container: HTMLElement | null;
  private classes: string[];

  constructor(containerSelector: string, classes: string[]) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      throw new Error('Container not found in class Main.');
    }
    this.classes = classes;
  }

  clear(): void {
    while (this.container?.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
  }

  private createElement(tag: string, className?: string, content?: string, id?: string): HTMLElement {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (content) element.textContent = content;
    if (id) element.id = id;
    return element;
  }

  private createImageElement(src: string, alt: string, className?: string): HTMLImageElement {
    const img = document.createElement('img') as HTMLImageElement;
    img.src = src;
    img.alt = alt;
    if (className) img.classList.add(className);
    return img;
  }

  private appendElement(parent: HTMLElement, child: HTMLElement | undefined): void {
    if (child) parent.appendChild(child);
  }

  render(datas: Data): void {
    const body = this.createElement('div', this.classes[0]);
    const content = this.createElement('div');
    this.appendElement(body, this.createElement('h1', undefined, datas.topic ?? ""));

    datas.about?.forEach(data => {
      const block = this.createElement('div');
      data.title && this.appendElement(block, this.createElement('h3', undefined, data.title));
      data.qualities && this.appendElement(block, this.createElement('h5', undefined, data.qualities));
      data.company && this.appendElement(block, this.createElement('h2', undefined, data.company));
      data.description && this.appendElement(block, this.createElement('h5', undefined, data.description));
      (data.startDate && data.finishDate) && this.appendElement(block, this.createElement('p', undefined, `${data.startDate}  ${data.finishDate}`));
      data.languages && this.appendElement(block, this.createElement('h5', undefined, data.languages));

      data.personal_details?.forEach(item => {
        const div = this.createElement('div');
        const img = this.createImageElement(item.logo, item.alt, 'img');
        if (item.selector === 'a' || item.selector === 'h5') {
          const network = this.createElement(item.selector) as HTMLAnchorElement | HTMLHeadingElement;
          network.textContent = item.text ?? "";
          network.id = item.text ?? "";
          if (item.selector === 'a' && network instanceof HTMLAnchorElement) {
            network.href = item.network ?? "";
          }
          div.appendChild(img);
          div.appendChild(network);
        }
        block.appendChild(div);
      });

      if (data.skils) {
        data.skils.forEach(skil => {
          const skillDiv = this.createElement('div');
          const skillImg = this.createImageElement(skil.logo, skil.alt, 'img');
          const lang = this.createElement('p', undefined, skil.lang, 'skil');
          skillDiv.appendChild(skillImg);
          skillDiv.appendChild(lang);

          if (skil.rate !== undefined && datas.done && datas.not) {
            for (let i = 1; i <= 5; i++) {
              const rate = this.createElement('i');
              rate.classList.add(...(i <= skil.rate ? datas.done ?? [] : datas.not ?? []));
              skillDiv.appendChild(rate);
            }
          }
          block.appendChild(skillDiv);
        });
      }
      content.appendChild(block);
    });

    body.appendChild(content);
    this.container?.appendChild(body);
  }
}
