import React, { FC, useContext, useEffect } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { Container, SectionStyling, Img, TextContainer, StrengthsList, ImgStyling } from './styles';
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
import { LazyImg } from '../../../../atoms/img';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const ClassSection: FC<IClassSection> = ({ id, headling, img, p, strengths, word }) => {

  const { inView, ref, entry } = useInView({ triggerOnce: true });
  const { currentLanguage, windowWidth } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  useEffect(() => {
    if (inView && entry?.target.childNodes) {
      gsap.timeline()
        .to(entry.target, { scaleX: 1, delay: .5, duration: .5 })
        .to(entry.target.childNodes, { autoAlpha: 1, stagger: .2 });
    }
  }, [inView])

  return (
    <SectionWithId id={ id } styling={ SectionStyling }>
      <Container ref={ ref }>
      {
        removeUnitAndParseInt(EBreakpoints.OFFER_ADVERTISEMENT_BREAK, ECssUnits.pixels) < windowWidth &&
        <ThreeTimesWord word={ word } />
      }
      <LazyImg src={ img } styling={ ImgStyling } />
        <TextContainer>
          <H1>
            { isEnglish ? headling.eng : headling.pl }
          </H1>
          <P>
            { isEnglish ? p.eng : p.pl }
          </P>
          <StrengthsList>
            {
              strengths.map(({ eng, pl }) => 
                <li key={ eng }>
                  <FontAwesomeIcon icon={ faFistRaised } />&nbsp;
                  { isEnglish ? eng : pl }
                </li>)
            }
          </StrengthsList>
          <FancyLink 
            fontSizeRem={ 1 }
            linkPath={ EChildRoutes.SCHEDULE } 
            linkContent={ isEnglish ? 'See in the schedule' : 'Zobacz w planie' }
          />
        </TextContainer>
      </Container>
    </SectionWithId>
  )
}

export default ClassSection;