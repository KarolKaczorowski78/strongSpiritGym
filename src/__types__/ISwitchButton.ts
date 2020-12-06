import { Dispatch, ReactNode, SetStateAction } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

export default interface ISwitchButton {
  setState: Dispatch<SetStateAction<boolean>>,
  children: ReactNode,
  styling?: FlattenSimpleInterpolation,
}