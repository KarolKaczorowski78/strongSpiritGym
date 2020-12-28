import React, { FC } from 'react';
import IFancyLink from '../../../__types__/IFancyLink';
import { Link }  from './styles';

const FancyLink: FC<IFancyLink> = ({ linkContent, linkPath, fontSizeRem }) => {
  return (
    <Link to={ linkPath } fontSizeRem={ fontSizeRem ? fontSizeRem : 1 }>
      { linkContent }&nbsp;&nbsp;
    </Link>
  )
}

export default FancyLink;