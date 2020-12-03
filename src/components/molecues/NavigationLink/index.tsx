import React, { FC } from 'react';
import { Link } from './styles';
import INavigationLink from '../../../__types__/INavigationLink';

const NavigationLink: FC<INavigationLink> = ({ to, children }) => {
  return <Link to={ to }>{ children }</Link>
}

export default NavigationLink;