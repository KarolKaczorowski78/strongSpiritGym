import { EChildRoutes } from './ERoutes';
import { ESectionIds } from './ESectionsIds';
import IContent from './IContent';

export default interface ITrainingPerkSection {
  id: ESectionIds,
  images: string[],
  route: EChildRoutes,
  headling: string,
  p: string,
  link: string,
}

export interface ITrainingPerkSectionLanguages {
  id: ESectionIds,
  images: string[],
  route: EChildRoutes,
  headling: IContent,
  p: IContent,
  link: IContent,
}