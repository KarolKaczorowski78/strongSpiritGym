import React, { FC, useContext, useEffect } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Nav, NavigationLinksContainer, NavigationLinksContainerStatic } from './styles';
import { Routes } from '../../../routes';
import MainRouteNavigationLink from '../../molecues/MainRouteNavigationLink';
import ToggleNavigationLinksVisibilityButton from '../../molecues/ToggleNavigationVisibilityButton';
import Logo from '../../molecues/Logo';
import LanguageSwitcher from '../../molecues/LanguageSwitcher';
import { EBreakpoints } from '../../../__types__/EBreakpoints';
import { ECssUnits } from '../../../__types__/ECssUnits';
import { removeUnitAndParseInt } from '../../../universal/removeUnitAndParseInt';
import { useLocation } from 'react-router-dom';

const Navigation: FC = () => {

  const { pathname } = useLocation();
  const { navigationLinksVisibility, setNavigationLinksVisibility, windowWidth } = useContext(PrimitivesContext);

  useEffect(() => {
    setNavigationLinksVisibility(() => false);
  }, [pathname])

  return (
    <Nav>
      <Logo linkedToHome={ true } size={ 2.5 } />
      <NavigationLinksContainer>
        <NavigationLinksContainerStatic visible={ navigationLinksVisibility }>
          { 
            Routes.slice(1, -1).map((route) => 
              <MainRouteNavigationLink { ...route } key={ route.engName } />)
          }
          <LanguageSwitcher />
        </NavigationLinksContainerStatic>
      </NavigationLinksContainer>
      { 
        windowWidth <= removeUnitAndParseInt(EBreakpoints.NAV_BREAK, ECssUnits.pixels) && 
        <ToggleNavigationLinksVisibilityButton /> }
    </Nav>
  )
}

export default Navigation;