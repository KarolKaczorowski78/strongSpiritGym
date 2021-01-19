import React, { FC, useContext, useEffect } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import IProgramSection from '../../../../../__types__/IProgramSection';
import { SectionStyling, TextContainer, ChartsContainer, CostContainer, BackgroundIcon, ImgStyling } from './styles';
import H2 from '../../../../atoms/h2';
import Chart from '../../../../molecues/Chart';
import FancyLink from '../../../../molecues/FancyLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { LazyImg } from '../../../../atoms/img';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const ProgramSection: FC<IProgramSection> = ({ id, img, name, linkPath, strengths }) => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';
  const { inView, ref, entry } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && entry?.target.childNodes) {
      gsap.to(entry.target.childNodes, { autoAlpha: 1, stagger: .2 })
    }
  }, [inView]);

  return (
    <SectionWithId id={ id } styling={ SectionStyling }>
      <LazyImg src={ img } styling={ ImgStyling } />
      <TextContainer>
        <H2>{ isEnglish ? name.eng : name.pl }</H2>
        <ChartsContainer>
          <Chart percentage={ strengths[0] } propName={ isEnglish ? 'Strength' : 'Siła' } />
          <Chart percentage={ strengths[1] } propName={ isEnglish ? 'Endurance' : 'Wydolnosc' } />
          <Chart percentage={ strengths[2] } propName={ isEnglish ? 'Speed' : 'Szybkosc' } />
          <Chart percentage={ strengths[3] } propName={ isEnglish ? 'Condition' : 'Kondycja' } />
        </ChartsContainer>
        <CostContainer>
          <FontAwesomeIcon icon={ faMoneyCheckAlt } />&nbsp;
          { isEnglish ? 'From $50/month' : 'Od 80 zł/miesiac'}
        </CostContainer>
        <FancyLink 
          linkPath={ linkPath } 
          linkContent={ isEnglish ? 'View program' : 'Zobacz program' } 
          color="lightgrey" 
        />
      </TextContainer>
      <BackgroundIcon>
        <FontAwesomeIcon icon={ faDumbbell } />
      </BackgroundIcon>
    </SectionWithId>
  )
}

export default ProgramSection;