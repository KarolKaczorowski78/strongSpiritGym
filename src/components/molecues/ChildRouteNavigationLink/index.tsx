import React, { FC } from 'react';
import { css } from 'styled-components';
import { EChildRoutes } from '../../../__types__/ERoutes';
import NavigationLink from '../NavigationLink';
import { pathToContentChildRoute } from '../../../universal/pathToContentChildRoute';

const ButtonStyling = css`
  color: black;
  display: block;
  font-size: .8rem;
  margin: 5px 0;
`;

const ChildRouteNavigationLink: FC<{ to: EChildRoutes }> = ({ to }) => {
  return (
    <NavigationLink to={ to } styling={ ButtonStyling }>
      { pathToContentChildRoute(to) }
    </NavigationLink>
  )
}

export default ChildRouteNavigationLink;