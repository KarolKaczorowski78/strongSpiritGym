import React, { FC, useState, useEffect, useRef } from 'react';
import NavigationLink from '../NavigationLink';
import IMainRouteNavigationLink from '../../../__types__/IMainRouteNavigationLink';
import { Container, ButtonStyle, ShowSubTopicsButton, ChildRouteLinksContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChildRouteNavigationLink from '../ChildRouteNavigationLink';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { pathToContent } from '../../../universal/pathToContent';
import gsap from 'gsap';
import { EChildRoutes } from '../../../__types__/ERoutes';

const MainRouteNavigationLink: FC<IMainRouteNavigationLink> = ({ to, subTopics }) => {

  const [areChildLinksVisible, setAreChildRoutesVisible] = useState<boolean>(false);
  const childRouteLinksContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const [transformValue, alphaValue] = areChildLinksVisible ? [0, 1] : [-15, 0];
    gsap.to(childRouteLinksContainer.current, { y: transformValue, autoAlpha: alphaValue });
  }, [areChildLinksVisible])

  const handleClick = () => { setAreChildRoutesVisible(state => !state) }

  return (
    <Container>
      <NavigationLink styling={ ButtonStyle } to={ to }>
        { pathToContent(to, true) }&nbsp;
      </NavigationLink>
      { subTopics && 
        <>
          <ShowSubTopicsButton onClick={ handleClick }>
            <FontAwesomeIcon icon={ areChildLinksVisible ? faAngleUp : faAngleDown } />
          </ShowSubTopicsButton>
          <ChildRouteLinksContainer ref={ childRouteLinksContainer }>
            { subTopics.map(({ path }) => <ChildRouteNavigationLink to={ path as EChildRoutes } />) }
          </ChildRouteLinksContainer>
        </>
      }
    </Container>
  )
}

export default MainRouteNavigationLink;