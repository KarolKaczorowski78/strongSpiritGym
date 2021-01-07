import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Container, Specialization, Email, Intro, Span, BackgroundIcon } from './styles';
import ICoach from '../../../__types__/ICoach';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { EIndividualProgramSports } from '../../../__types__/EIndividualProgramSports';

const toPolishVersion = (value: EIndividualProgramSports) => {
  if (value === 'STAND_UP') return 'Stójki';
  else if (value === 'GROUND_GAME') return 'Parteru';
  else return value
}

const CoachCard: FC<ICoach> = ({ first_name, last_name, email, specializations }) => {

  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  return (
    <Container>
      <Intro>
        <Span>{ first_name }</Span>
        <Span>{ last_name }</Span>
      </Intro>
      <Specialization>
        <FontAwesomeIcon icon={ faFistRaised } />&nbsp;&nbsp;
        { isEnglish ? `${specializations.replace(/_/g,' ')} coach` : `Trener ${toPolishVersion(specializations)}` }
      </Specialization>
      <Email href={ `mailto:${email}` }>
        <FontAwesomeIcon icon={ faEnvelope } />&nbsp;&nbsp;
        { email }
      </Email>
      <BackgroundIcon>
        <FontAwesomeIcon icon={ faFistRaised } />
      </BackgroundIcon>
    </Container>
  )
}

export default CoachCard;