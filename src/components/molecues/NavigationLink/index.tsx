import React, { FC, useContext } from 'react';
import { Link } from './styles';
import INavigationLink from '../../../__types__/INavigationLink';
import { capitalizeString } from '../../../universal/capitalizeString';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { ELanguages } from '../../../__types__/ELanguages';

const NavigationLink: FC<INavigationLink> = ({ to, plName, styling, engName }) => {

  const { currentLanguage } = useContext(PrimitivesContext)

  return (
    <Link styling={ styling } to={ to }>
      { capitalizeString(currentLanguage === ELanguages.ENGLISH ? engName : plName) }
    </Link>
  )
}

export default NavigationLink;