import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import ILocationHomeSection from '../../../../../__types__/ILocationHomeSection';
import { H1, SectionStyling, Img, HeadlingContainer } from './styles';
import Yoo from '../../../../../img/location/main.jpg';
import P from '../../../../atoms/p';

const HomeSection: FC<ILocationHomeSection> = ({ id, overview, countryName, country }) => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';
  
  return (
    <SectionWithId id={ id } styling={ SectionStyling }>
      <HeadlingContainer>
        <H1>{ isEnglish ? `SSG in: ${countryName.eng}` : `SSG w: ${countryName.pl}` }</H1>
        <Img alt="" src={ Yoo } />
      </HeadlingContainer>
      <P>{ isEnglish ? overview.eng : overview.pl }</P>
    </SectionWithId>
  )
}

export default HomeSection;