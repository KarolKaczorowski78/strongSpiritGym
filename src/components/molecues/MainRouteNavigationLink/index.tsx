import React, { FC } from 'react';
import NavigationLink from '../NavigationLink';
import IMainRouteNavigationLink from '../../../__types__/IMainRouteNavigationLink';
import { Container, ButtonStyle, ShowSubTopicsButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { pathToContent } from '../../../universal/pathToContent';

const MainRouteNavigationLink: FC<IMainRouteNavigationLink> = ({ to }) => {
  return (
    <Container>
      <NavigationLink styling={ ButtonStyle } to={ to }>
        { pathToContent(to, true) }&nbsp;
      </NavigationLink>
      <ShowSubTopicsButton>
        <FontAwesomeIcon icon={ faAngleDown } />
      </ShowSubTopicsButton>
    </Container>
  )
}

export default MainRouteNavigationLink;