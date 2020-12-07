import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Nav, NavigationLinksContainer, NavigationLinksContainerStatic } from './styles';
import { EMainRoutes } from '../../../__types__/ERoutes';
import { Routes } from '../../../routes';
import MainRouteNavigationLink from '../../molecues/MainRouteNavigationLink';
import ToggleNavigationLinksVisibilityButton from '../../molecues/ToggleNavigationVisibilityButton';
import Logo from '../../molecues/Logo';

const Navigation: FC = () => {

  const { navigationLinksVisibility } = useContext(PrimitivesContext);

  return (
    <Nav>
      <Logo linkedToHome={ true } size={ 2.5 } />
      <NavigationLinksContainer>
        <NavigationLinksContainerStatic visible={ navigationLinksVisibility }>
          { 
            Routes.slice(1, -1).map(({ path, subTopics }) => 
              <MainRouteNavigationLink subTopics={ subTopics } to={ path as EMainRoutes } />)
          }
        </NavigationLinksContainerStatic>
      </NavigationLinksContainer>
      <ToggleNavigationLinksVisibilityButton />
    </Nav>
  )
}

export default Navigation;