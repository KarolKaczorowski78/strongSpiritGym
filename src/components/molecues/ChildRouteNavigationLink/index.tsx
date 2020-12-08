import React, { FC } from 'react';
import { css } from 'styled-components';
import { EChildRoutes } from '../../../__types__/ERoutes';
import NavigationLink from '../NavigationLink';
import IChildRoute from '../../../__types__/IChildRoute';

const ButtonStyling = css`
  color: black;
  display: block;
  font-size: .8rem;
  margin: 5px 0;
`;

const ChildRouteNavigationLink: FC<IChildRoute> = ({ path, plName, engName }) => {
  return (
    <NavigationLink 
      to={ path as EChildRoutes } 
      styling={ ButtonStyling } 
      plName={ plName } 
      engName={ engName }
    />
  )
}

export default ChildRouteNavigationLink;