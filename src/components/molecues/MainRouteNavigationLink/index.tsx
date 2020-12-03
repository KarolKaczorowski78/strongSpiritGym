import React, { FC } from 'react';
import NavigationLink from '../NavigationLink';
import IMainRouteNavigationLink from '../../../__types__/IMainRouteNavigationLink';
import { ButtonStyle } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const MainRouteNavigationLink: FC<IMainRouteNavigationLink> = ({ to }) => {
  return (
    <NavigationLink styling={ ButtonStyle } to={ to }>
      { to }&nbsp;<FontAwesomeIcon icon={ faAngleDown } />
    </NavigationLink>
  )
}

export default MainRouteNavigationLink;