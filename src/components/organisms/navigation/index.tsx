import React, { FC } from 'react';
import { Nav, NavigationLinksContainer } from './styles';
import { EMainRoutes } from '../../../__types__/ERoutes';
import { Routes } from '../../../routes';
import MainRouteNavigationLink from '../../molecues/MainRouteNavigationLink';

const Navigation: FC = () => {
  return (
    <Nav>
      <NavigationLinksContainer>
        { 
          Routes.slice(1, -1).map(({ path, subTopics }) => 
            <MainRouteNavigationLink subTopics={ subTopics } to={ path as EMainRoutes } />)
        }
      </NavigationLinksContainer>
    </Nav>
  )
}

export default Navigation;