import React, { useContext } from 'react';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { SectionWithId } from '../../../../atoms/section';
import ScrollToSectionButton from '../../../../molecues/ScrollToSectionButton';
import IntroImage from '../../../../../img/homePage/intro.jpg';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';
import { ECssUnits } from '../../../../../__types__/ECssUnits';
import IntroImageSmall from '../../../../../img/homePage/introSmall.jpg';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { removeUnitAndParseInt } from '../../../../../universal/removeUnitAndParseInt';
import { ButtonStyling, Img, H1, Span } from './styles';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeSection as Content } from '../../../../../websiteTextContent/HomePage';
import { css } from 'styled-components';

export default function HomeSection() {
  
  const { windowWidth, currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ ESectionIds.HOMEPAGE_HOME } styling={ css`padding-top: 110px` }>
      <Img 
        src={ windowWidth > removeUnitAndParseInt(EBreakpoints.TABLET_SMALL, ECssUnits.pixels) ? 
          IntroImage : IntroImageSmall } 
        alt="" />
      <H1>
        <Span>{ Content.headling.firstLine[isEnglish ? 'eng' : 'pl'] }</Span>
        <Span>{ Content.headling.secondLine[isEnglish ? 'eng' : 'pl'] }</Span>
      </H1>
      <ScrollToSectionButton 
        targetSection={ ESectionIds.HOMEPAGE_OFFERS }
        styling={ ButtonStyling }
      >
        <FontAwesomeIcon icon={ faChevronDown } />
        <FontAwesomeIcon icon={ faChevronDown } />
        <FontAwesomeIcon icon={ faChevronDown } />
      </ScrollToSectionButton>
    </SectionWithId>
  )
}
