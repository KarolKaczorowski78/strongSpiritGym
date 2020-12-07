import React, { FC, useState, useEffect, useRef } from 'react';
import NavigationLink from '../NavigationLink';
import IMainRouteNavigationLink from '../../../__types__/IMainRouteNavigationLink';
import { Container, ButtonStyle, ShowSubTopicsButton, ChildRouteLinksContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ChildRouteNavigationLink from '../ChildRouteNavigationLink';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { EMainRoutes } from '../../../__types__/ERoutes';

const MainRouteNavigationLink: FC<IMainRouteNavigationLink> = ({ engName, plName, subTopics, path }) => {

  const [areChildLinksVisible, setAreChildRoutesVisible] = useState<boolean>(false);
  const childRouteLinksContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const [transformValue, alphaValue] = areChildLinksVisible ? [0, 1] : [-15, 0];
    gsap.to(childRouteLinksContainer.current, { y: transformValue, autoAlpha: alphaValue });
  }, [areChildLinksVisible])

  const handleClick = () => { setAreChildRoutesVisible(state => !state) }

  return (
    <Container>
      <NavigationLink styling={ ButtonStyle }to={ path as EMainRoutes } plName={ plName } engName={ engName }
      />
      { subTopics && 
        <>
          <ShowSubTopicsButton onClick={ handleClick }>
            <FontAwesomeIcon icon={ areChildLinksVisible ? faAngleUp : faAngleDown } />
          </ShowSubTopicsButton>
          <ChildRouteLinksContainer ref={ childRouteLinksContainer }>
            { subTopics.map((childRoute) => <ChildRouteNavigationLink { ...childRoute } />) }
          </ChildRouteLinksContainer>
        </>
      }
    </Container>
  )
}

export default MainRouteNavigationLink;