import { Dispatch, SetStateAction } from "react";

export default interface IBooleansContext {
  navigationLinksVisibility: boolean,
  setNavigationLinksVisibility: Dispatch<SetStateAction<boolean>>,
}