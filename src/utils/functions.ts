import { Burger } from "../components/burger";
import { Container } from "../components/container";
import { Navbar } from "../components/navbar";
import { main } from "../main";
import { Data, Certificates, Education, Employment, MainQualities, Experience, Languages, PersonalDetails, notInfo } from "./data";
import { CallbackArgs } from "./interface";

export const SelectedElem = ({ event, arrOfElems }: CallbackArgs): HTMLElement => {
    event?.preventDefault();
    const selectedElem = event?.target as HTMLElement;
    removeActivClassInGroopTags(arrOfElems)
    selectedElem.classList.add('active')
    handleSelectedElem(selectedElem)
    main.clear();
    main.render(handleSelectedElem(selectedElem) as Data)
    return selectedElem
};

export function handleSelectedElem(selectedElem: HTMLElement) {
    switch (true) {
        case selectedElem.textContent === "Education" || selectedElem.classList.contains('fa-graduation-cap'):
            return Education;
        case selectedElem.textContent === "Employment" || selectedElem.classList.contains('fa-briefcase'):
            return Employment;
        case selectedElem.textContent === "Certificates" || selectedElem.classList.contains('fa-certificate'):
            return Certificates;
        case selectedElem.textContent === "Experience" || selectedElem.classList.contains('fa-ranking-star'):
            return Experience;
        case selectedElem.textContent === "Main qualities" || selectedElem.classList.contains('fa-person-rays'):
            return MainQualities;;
        case selectedElem.textContent === "Languages" || selectedElem.classList.contains('fa-language'):
            return Languages;
        case selectedElem.textContent === "Personal details" || selectedElem.classList.contains('fa-circle-info'):
            return PersonalDetails;
        default:
            return notInfo;
    }
}

const removeActivClassInGroopTags = (Elements: NodeListOf<Element>): void => {
    Elements.forEach(elm => elm.classList.remove('active'))
}

export const handleNavbarElem = (arrOfElems: NodeListOf<Element>, callback: (args: CallbackArgs) => void) => {
    arrOfElems?.forEach(elem => {

        elem.addEventListener('click', (event: Event) => { callback({ event, arrOfElems }) })
    })
}


export const burgerEvent = (burger: Burger, container: Container, navbar: Navbar) => {
    burger.getBurgElement()?.addEventListener('click', () => {
        if (!burger.getBurgElement()?.classList.contains('active')) {
            burger.getBurgElement()?.classList.add('active');
            burger.getBurgerConteinerElement()?.classList.add('active')
            container.getConteinerElement()?.classList.add('active');
            navbar.getNavbarElement()?.classList.add("active");
            navbar.clear();
            navbar.setText();
            handleNavbarElem(navbar?.getAnchorTags("#text"), SelectedElem);
        } else {
            burger.getBurgElement()?.classList.remove('active');
            burger.getBurgerConteinerElement()?.classList.remove('active')
            container.getConteinerElement()?.classList.remove('active');
            navbar.getNavbarElement()?.classList.remove("active");
            navbar.clear();
            navbar.setIcon();
            handleNavbarElem(navbar?.getAnchorTags("#icon"), SelectedElem);
        }
    })

}