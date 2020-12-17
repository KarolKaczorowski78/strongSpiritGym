import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { Container, SectionStyling, Img, TextContainer, StrengthsList } from './styles';
import IClassSection from '../../../../../__types__/IClassSection';
import FancyLink from '../../../../molecues/FancyLink';
import { SectionWithId } from '../../../../atoms/section/index';
import ThreeTimesWord from '../../../../molecues/threeTimeWord';
import H1 from '../../../../atoms/h1';
import { EChildRoutes } from '../../../../../__types__/ERoutes';
import P from '../../../../atoms/p';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { removeUnitAndParseInt } from '../../../../../universal/removeUnitAndParseInt';
import { ECssUnits } from '../../../../../__types__/ECssUnits';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

const ClassSection: FC<IClassSection> = ({ id, headling, img, p, strengths, word }) => {

  const { currentLanguage, windowWidth } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ id } styling={ SectionStyling }>
      <Container>
      {
        removeUnitAndParseInt(EBreakpoints.OFFER_ADVERTISEMENT_BREAK, ECssUnits.pixels) < windowWidth &&
        <ThreeTimesWord word={ word } />
      }
      <Img src={ img } alt=""/>
        <TextContainer>
          <H1>
            { isEnglish ? headling.eng : headling.pl }
          </H1>
          <P>
            { isEnglish ? p.eng : p.pl }
          </P>
          <StrengthsList>
            {
              strengths.map(({ eng, pl }, i) => 
                <li>
                  <FontAwesomeIcon icon={ faFistRaised } />&nbsp;
                  { isEnglish ? eng : pl }
                </li>)
            }
          </StrengthsList>
          <FancyLink 
            linkPath={ EChildRoutes.SCHEDULE } 
            linkContent={ isEnglish ? 'See in the schedule' : 'Zobacz w planie' }
          />
        </TextContainer>
      </Container>
    </SectionWithId>
  )
}

export default ClassSection;