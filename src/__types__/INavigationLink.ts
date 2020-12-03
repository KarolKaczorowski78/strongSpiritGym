import { EChildRoutes, EMainRoutes } from './ERoutes';
import { FlattenSimpleInterpolation } from 'styled-components';
import { ReactNode } from 'react';

export default interface INavigationLink {
  to: EChildRoutes | EMainRoutes,
  styling: FlattenSimpleInterpolation,
  children: ReactNode,
}