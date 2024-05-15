import { main } from '../main';
import {
  Data,
  Certificates,
  Education,
  Employment,
  MainQualities,
  Experience,
  Languages,
  PersonalDetails,
  notInfo,
} from './data';
import { CallbackArgs } from './interface';

const categoryMap = new Map<string, { data: Data, classes: string[] }>([
  ['Education', { data: Education, classes: ['fa-graduation-cap'] }],
  ['Employment', { data: Employment, classes: ['fa-briefcase'] }],
  ['Certificates', { data: Certificates, classes: ['fa-certificate'] }],
  ['Experience', { data: Experience, classes: ['fa-ranking-star'] }],
  ['Main qualities', { data: MainQualities, classes: ['fa-person-rays'] }],
  ['Languages', { data: Languages, classes: ['fa-language'] }],
  ['Personal details', { data: PersonalDetails, classes: ['fa-circle-info'] }],
]);

export function getCategoryDataFromElement(selectedElement: HTMLElement) {
  for (let [key, info] of categoryMap.entries()) {
    if (selectedElement.textContent === key || info.classes.some(cls => selectedElement.classList.contains(cls))) {
      return info.data;
    }
  }
  return notInfo;
}

export const updateUIOnMenuSelection = ({ event, arrayOfElements }: { event: MouseEvent | undefined, arrayOfElements: NodeListOf<HTMLElement> }): HTMLElement | undefined => {
  if (!event) return;
  event.preventDefault();
  const selectedElement = event.target as HTMLElement;
  removeActiveClassFromGroup(arrayOfElements);
  selectedElement.classList.add('active');
  const data = getCategoryDataFromElement(selectedElement);
  main.clear();
  main.render(data as Data);
  return selectedElement;
};

const removeActiveClassFromGroup = (elements: NodeListOf<HTMLElement>): void => {
  elements.forEach(element => element.classList.remove('active'));
};

export const handleNavbarElem = (
  arrayOfElements: NodeListOf<HTMLElement>,
  callback: (args: CallbackArgs) => void,
) => {
  arrayOfElements.forEach(elem => {
    elem.addEventListener('click', (event: MouseEvent) => {
      callback({ event, arrayOfElements });
    });
  });
};
