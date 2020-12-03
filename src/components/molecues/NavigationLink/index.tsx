import React, { FC } from 'react';
import { Link } from './styles';
import INavigationLink from '../../../__types__/INavigationLink';

const NavigationLink: FC<INavigationLink> = ({ to, styling, children }) => {
  return <Link to={ to } styling={ styling }>{ children }</Link>
}

export default NavigationLink;