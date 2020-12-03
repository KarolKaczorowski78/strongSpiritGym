import React, { FC } from 'react';
import { Link } from './styles';
import INavigationLink from '../../../__types__/INavigationLink';

const NavigationLink: FC<INavigationLink> = ({ to, styling }) => {
  return <Link to={ to } styling={ styling }>{ to }</Link>
}

export default NavigationLink;