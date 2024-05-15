import { Container } from "../components/container";
import { Navbar } from "../components/navbar";
import { handleNavbarElem } from "./functions";

export function createMenuToggleHandler(container: Container, navbar: Navbar, SelectedMenuElement: any) {
    return (isActive: boolean) => {
        container.getContainerElement()?.classList.toggle('active', isActive);
        navbar.getNavbarElement()?.classList.toggle('active', isActive);

        if (isActive) {
            navbar.clear();
            navbar.setText();
            handleNavbarElem(navbar.getAnchorTags('#text'), SelectedMenuElement);
        } else {
            navbar.clear();
            navbar.setIcon();
            handleNavbarElem(navbar.getAnchorTags('#icon'), SelectedMenuElement);
        }
    };
}
