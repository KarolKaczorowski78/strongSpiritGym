import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import { Home } from '../../../../../websiteTextContent/Locations';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import HomeImg from '../../../../../img/locations/home.jpg';
import { Img, SectionStyling, H1, TextContainer } from './styles';
import CityFinder from '../../../../molecues/CityFinder';
import ScrollToSectionButtonArrow from '../../../../molecues/ScrollToSectionButton/ScrollToSectionButtonArrow';

const { headling, input, button } = Home;

const HomeSection: FC<{ setCurrSectionIndex: Dispatch<SetStateAction<number>> }> = ({ setCurrSectionIndex }) => {
  
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
          sideFunction={ () => { setCurrSectionIndex(() => 1) } }
        />
      </TextContainer>
      <Img src={ HomeImg } alt="" />
    </SectionWithId>
  )
}

export default HomeSection;