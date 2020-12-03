import { EChildRoutes, EMainRoutes } from './ERoutes';
import { FlattenSimpleInterpolation } from 'styled-components';

export default interface INavigationLink {
  to: EChildRoutes | EMainRoutes,
  styling: FlattenSimpleInterpolation,
}