import { ReactNode } from "react";
import { FlattenSimpleInterpolation } from "styled-components";

export default interface ISectionWithId {
  children: ReactNode,
  id: string,
  styling?: FlattenSimpleInterpolation,
}