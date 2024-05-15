import './styles/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from './components/navbar.ts';
import { Main } from './components/main.ts';
import { Burger } from './components/burger.ts';
import {
  navbarClasses,
  burgerClasses,
  Education,
  links,
  navbarIds,
  stack,
  footerClasses,
} from './utils/data.ts';

import { Container } from './components/container.ts';
import { handleNavbarElem, updateUIOnMenuSelection } from './utils/functions.ts';
import { Footer } from './components/footer.ts';
import { createMenuToggleHandler } from './utils/menuToggleHandler.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="main-container" >
    <div class="container">
    </div>
</div>
`;

const container = new Container('.container');
container.render();
const navbar = new Navbar('.navbar', links, navbarClasses, navbarIds);
const burger = new Burger('.burger', burgerClasses, createMenuToggleHandler(container, navbar, updateUIOnMenuSelection));
const footer = new Footer('.footer', footerClasses);
export const main = new Main('.main', ['body']);

// document.querySelector()
const activeElements = document.querySelectorAll('.navbar .active');

if (activeElements.length > 0) {
  console.log("Найдено активных элементов:", activeElements.length);
  activeElements.forEach(elem => {
    console.log("Активный элемент:", elem.textContent || elem.className);
  });
} else {
  console.log("Активные элементы не найдены");
}


main.render(Education);
navbar.setIcon();
footer.render(stack);
burger.toggle();

handleNavbarElem(navbar?.getAnchorTags('#icon'), updateUIOnMenuSelection);
