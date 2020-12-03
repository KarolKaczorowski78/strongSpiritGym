import { EChildRoutes, EMainRoutes } from './ERoutes';

export default interface IMainRouteNavigationLink {
  to: EChildRoutes | EMainRoutes,
}