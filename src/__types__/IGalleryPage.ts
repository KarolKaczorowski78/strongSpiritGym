import { Dispatch, SetStateAction } from 'react';
import { ESectionIds } from './ESectionsIds';

export default interface IGalleryPage {
  sectionsIds: ESectionIds[],
  currSectionIndex: number,
  setCurrSectionIndex: Dispatch<SetStateAction<number>>,
}