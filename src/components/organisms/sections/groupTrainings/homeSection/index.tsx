import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import { ESectionIds } from '../../../../../__types__/ESectionsIds';
import { HomeSection as SectionContent } from '../../../../../websiteTextContent/GroupTrainingsPage';
import { Container, SectionStyling, Img, TextContainer } from './styles';
import IntroImage from '../../../../../img/groupTrainingsPage/intro.jpg';
import IntroImage2 from '../../../../../img/groupTrainingsPage/intro2.jpg';
import IntroImage3 from '../../../../../img/groupTrainingsPage/intro3.jpg';
import IntroImage4 from '../../../../../img/groupTrainingsPage/intro4.jpg';
import H1 from '../../../../atoms/h1';
import P from '../../../../atoms/p';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';
import { removeUnitAndParseInt } from '../../../../../universal/removeUnitAndParseInt';
import { ECssUnits } from '../../../../../__types__/ECssUnits';
import ScrollToSectionButtonArrow from '../../../../molecues/ScrollToSectionButton/ScrollToSectionButtonArrow';

const { headling, p, button } = SectionContent;

export default function HomeSection() {
  
  const { currentLanguage, windowWidth } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ ESectionIds.GROUP_WORKOUTS_HOME } styling={ SectionStyling }>
      <Container>
        {
          windowWidth > removeUnitAndParseInt(EBreakpoints.GROUP_TRAININGS_INTRO_BREAK, ECssUnits.pixels) ?
            <>
              <Img src={ IntroImage2 } alt="" />
              <Img src={ IntroImage } alt="" /> 
              <Img src={ IntroImage3 } alt="" />
            </>
          : <Img src={ IntroImage4 } alt="" />
        }
        <TextContainer>
          <H1 style={{ fontSize: '3rem' }}>
            { isEnglish ? headling.eng : headling.pl }
          </H1>
          <P style={{ fontSize: '1rem' }}>
            { isEnglish ? p.eng : p.pl }
          </P>
          <ScrollToSectionButtonArrow
            content={ isEnglish ? button.eng : button.pl }
            targetSection={ ESectionIds.GROUP_WORKOUTS_MMA }
          />
        </TextContainer>
      </Container>
    </SectionWithId>
  )
}
