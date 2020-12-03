import React, { FC } from 'react';
import { Link } from './styles';
import INavigationLink from '../../../__types__/INavigationLink';

const NavigationLink: FC<INavigationLink> = ({ to, children, styling }) => {
  return <Link styling={ styling } to={ to }>{ children }</Link>
}

export default NavigationLink;