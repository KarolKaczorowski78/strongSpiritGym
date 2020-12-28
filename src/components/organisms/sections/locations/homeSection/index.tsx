import React, { useContext } from 'react';
import { Home } from '../../../../../websiteTextContent/Locations';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import HomeImg from '../../../../../img/locations/home.jpg';
import { Img, SectionStyling, H1, TextContainer } from './styles';
import CityFinder from '../../../../molecues/CityFinder';
import ScrollToSectionButtonArrow from '../../../../molecues/ScrollToSectionButton/ScrollToSectionButtonArrow';

const { headling, input, button } = Home;

export default function HomeSection() {
  
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ ESectionIds.LOCATIONS_HOME } styling={ SectionStyling }>
      <TextContainer>
        <H1>{ isEnglish ? headling.eng : headling.pl }</H1>
        <CityFinder placeholder={ isEnglish ? input.eng : input.pl } />
        <ScrollToSectionButtonArrow 
          targetSection={ ESectionIds.LOCATIONS_PL }
          content={ isEnglish ? button.eng : button.pl }
          parentId="locations-wrapper"
        />
      </TextContainer>
      <Img src={ HomeImg } alt="" />
    </SectionWithId>
  )
}
