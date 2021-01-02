import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { SectionStyling, TextContainer, Img, H1, P } from './styles';
import MainImg from '../../../../../img/individualPrograms/main3.png';
import WordSwitcher from '../../../../molecues/WordSwitcher';
import { words, headling, p } from '../../../../../websiteTextContent/IndividualPrograms';
import { removeUnitAndParseInt } from '../../../../../universal/removeUnitAndParseInt';
import { ECssUnits } from '../../../../../__types__/ECssUnits';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

const HomeSection = () => {

  const { currentLanguage, windowWidth } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ ESectionIds.INDIVIDUAL_PROGRAMS_HOME } styling={ SectionStyling }>
      <TextContainer>
        <H1>
          <span>{ headling.firstLine[isEnglish ? 'eng' : 'pl'] }</span>
          <span>{ headling.lastLine[isEnglish ? 'eng' : 'pl'] }&nbsp;
            <WordSwitcher words={ words.map(({ eng, pl }) => isEnglish ? eng : pl) } />
          </span>
        </H1>
        <P>{ isEnglish ? p.eng : p.pl }</P>
      </TextContainer>
      { windowWidth > removeUnitAndParseInt(EBreakpoints.TABLET, ECssUnits.pixels) && 
        <Img src={ MainImg } alt="" />
      }
    </SectionWithId>
  )
}

export default HomeSection;