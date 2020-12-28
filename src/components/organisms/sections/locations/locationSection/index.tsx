import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import { SectionStyling, Img, TextContainer, H2 } from './styles';
import ILocationSection from '../../../../../__types__/ILocationSection';
import FancyLink from '../../../../molecues/FancyLink2';
import P from '../../../../atoms/p';

const LocationSection: FC<ILocationSection> = ({ id, img, countryName, description, linkPath }) => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ id } styling={ SectionStyling }>
      <Img src={ img } alt="" />
      <TextContainer>
        <H2>{ isEnglish ? countryName.eng : countryName.pl }</H2>
        <P>{ isEnglish ? description.eng : description.pl }</P>
        <FancyLink 
          linkContent={ isEnglish ? 'Find a club' : 'Znajdz klub' }
          linkPath={ linkPath }
          fontSizeRem={ 1.8 }
        />
      </TextContainer>
    </SectionWithId>
  )
}

export default LocationSection;