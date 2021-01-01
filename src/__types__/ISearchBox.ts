import { Dispatch, SetStateAction } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

export default interface ISearchBox {
  setState: Dispatch<SetStateAction<string>>,
  placeholder: string,
  state: string,
  styling?: FlattenSimpleInterpolation,
}