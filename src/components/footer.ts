import { Data } from '../utils/interface';

export class Footer {
  private container: HTMLElement | null;
  private classes: string[];

  constructor(containerSelector: string, classes: string[]) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      throw new Error('Container not found in class Footer.');
    }
    this.classes = classes;
  }

  private createHeaderElement(className: string, text: string): HTMLElement {
    const header = document.createElement('div');
    const h3 = document.createElement('h3');
    header.classList.add(className);
    h3.innerHTML = text;
    header.appendChild(h3);
    return header;
  }

  private createImageElement({ logo, alt }: { logo: string, alt: string }): HTMLElement {
    const img = document.createElement('img');
    img.src = logo;
    img.alt = alt;
    return img
  };

  render(data: Data): void {
    if (!data || !data.topic) {
      throw new Error('Insufficient data to render in class Footer.');
    }
    const fragment = document.createDocumentFragment();
    const header = this.createHeaderElement(this.classes[0], data.topic)

    data.stack?.forEach(item => {
      if (item && item.logo && item.alt) {
        const img = this.createImageElement(item);
        header.appendChild(img);
      }
    });

    fragment.appendChild(header)
    this.container?.appendChild(fragment);
  }
}
