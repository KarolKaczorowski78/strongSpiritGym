import { Dispatch, SetStateAction } from "react";

export default interface IPrimitivesContext {
  navigationLinksVisibility: boolean,
  setNavigationLinksVisibility: Dispatch<SetStateAction<boolean>>,
  windowScrollValue: number,
  setWindowScrollValue: Dispatch<SetStateAction<number>>,
}