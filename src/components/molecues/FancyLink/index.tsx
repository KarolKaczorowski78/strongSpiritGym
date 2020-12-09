import React, { FC } from 'react';
import IFancyLink from '../../../__types__/IFancyLink';
import { Link }  from './styles';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FancyLink: FC<IFancyLink> = ({ linkContent, linkPath }) => {
  return (
    <Link to={ linkPath }>
      { linkContent }&nbsp;&nbsp;
      <FontAwesomeIcon icon={ faArrowRight } />
    </Link>
  )
}

export default FancyLink;