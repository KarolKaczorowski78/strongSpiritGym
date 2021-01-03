import { EChildRoutes, EMainRoutes } from './ERoutes';
import { ESectionIds } from './ESectionsIds';
import IContent from './IContent';

export default interface IProgramSection {
  id: ESectionIds,
  img: string,
  name: IContent,
  linkPath: EMainRoutes | EChildRoutes,
  strengths: Array<.1|.2|.3|.4|.5|.6|.7|.8|.9|1>,

}