import { Dispatch, SetStateAction } from "react";

export default interface ITimeSetter {
  content: string,
  state: string,
  setState: Dispatch<SetStateAction<number>>,
  setStateValue: 1 | 5,
  maxStateValue: number,
}