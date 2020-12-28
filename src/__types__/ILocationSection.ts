import { EChildRoutes, EMainRoutes } from './ERoutes';
import { ESectionIds } from './ESectionsIds';
import IContent from './IContent';

export default interface ILocationSection {
  id: ESectionIds,
  countryName: IContent,
  description: IContent,
  img: string,
  linkPath: EChildRoutes | EMainRoutes,
}