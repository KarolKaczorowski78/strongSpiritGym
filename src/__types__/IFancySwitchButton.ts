import { Dispatch, SetStateAction } from "react";

export default interface IFancySwitchButton {
  setState: Dispatch<SetStateAction<boolean>>,
  state: boolean,
  content: string,
}