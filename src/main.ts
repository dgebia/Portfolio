import "./styles/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Navbar } from "./components/navbar.ts";
import { Main } from "./components/main.ts";
import { Burger } from "./components/burger.ts";
import {
    navbarClasses,
    burgerClasses,
    Education,
    links,
    navbarIds,
    stack,
    footerClasses
} from "./utils/data.ts";

import { Container } from "./components/container.ts";
import { burgerEvent, handleNavbarElem, SelectedElem } from "./utils/functions.ts";
import { Footer } from "./components/footer.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="main-container" >
    <div class="container">
    </div>
</div>
`;

const container = new Container(".container");
container.render();
const navbar = new Navbar(".navbar", links, navbarClasses, navbarIds);
const burger = new Burger(".burger", burgerClasses);
const footer = new Footer(".footer", footerClasses);
export const main = new Main(".main", ["body"]);

main.render(Education);
burger.render();
navbar.setIcon();
// header.render(stack);
footer.render(stack)

burgerEvent(burger, container, navbar)

handleNavbarElem(navbar?.getAnchorTags("#icon"), SelectedElem);

