import React, { FC } from 'react';
import { Nav } from './styles';
import { EMainRoutes } from '../../../__types__/ERoutes';
import { Routes } from '../../../routes';
import MainRouteNavigationLink from '../../molecues/MainRouteNavigationLink';

const Navigation: FC = () => {
  return (
    <Nav>
      { 
        Routes.slice(1, -1).map(({ path, subTopics }) => 
          <MainRouteNavigationLink subTopics={ subTopics } to={ path as EMainRoutes } />)
      }
    </Nav>
  )
}

export default Navigation;