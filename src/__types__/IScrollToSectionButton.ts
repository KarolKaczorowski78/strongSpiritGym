import { ReactNode } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { ESectionIds } from './ESectionsIds';

export default interface IScrollToSectionButton {
  styling: FlattenSimpleInterpolation,
  children: ReactNode,
  targetSection: ESectionIds,
  parentId?: string,
}

export interface IScrollToSectionButtonArrow {
  targetSection: ESectionIds,
  content: string,
  parentId?: string,
}