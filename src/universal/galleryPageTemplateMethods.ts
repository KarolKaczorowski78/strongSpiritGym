import { ESectionIds } from "../__types__/ESectionsIds";

export const scrollToSection = (id: ESectionIds) => {
  const target = document.querySelector(`#${id}`) as HTMLDivElement | null;

  target && window.scrollTo({
    top: target.offsetTop - 100,
    behavior: 'smooth',
  })
}