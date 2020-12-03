import { EChildRoutes, EMainRoutes } from './ERoutes';
import IChildRoute from './IChildRoute';

export default interface IMainRouteNavigationLink {
  to: EChildRoutes | EMainRoutes,
  subTopics?: IChildRoute[],
}