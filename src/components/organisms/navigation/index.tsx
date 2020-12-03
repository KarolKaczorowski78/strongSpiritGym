import React, { FC } from 'react';
import { Nav } from './styles';
import { EMainRoutes } from '../../../__types__/ERoutes';
import MainRouteNavigationLink from '../../molecues/MainRouteNavigationLink';

const Navigation: FC = () => {
  return (
    <Nav>
      <MainRouteNavigationLink to={ EMainRoutes.GROUP_TRAININGS } />
    </Nav>
  )
}

export default Navigation;