import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../../../../../contexts/primitivesContext';
import { SectionWithId } from '../../../../atoms/section';
import IProgramSection from '../../../../../__types__/IProgramSection';
import { SectionStyling, Img, TextContainer, ChartsContainer, CostContainer, BackgroundIcon } from './styles';
import H2 from '../../../../atoms/h2';
import Chart from '../../../../molecues/Chart';
import FancyLink from '../../../../molecues/FancyLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';

const ProgramSection: FC<IProgramSection> = ({ id, img, name, linkPath, strengths }) => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <SectionWithId id={ id } styling={ SectionStyling }>
      <Img src={ img } alt="" />
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