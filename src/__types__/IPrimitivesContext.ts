import { Dispatch, SetStateAction } from "react";
import { ELanguages } from './ELanguages';

export default interface IPrimitivesContext {
  navigationLinksVisibility: boolean,
  setNavigationLinksVisibility: Dispatch<SetStateAction<boolean>>,
  windowWidth: number,
  setWindowWidth: Dispatch<SetStateAction<number>>,
  currentLanguage: ELanguages,
  setCurrentLanguage: Dispatch<SetStateAction<ELanguages>>,
}