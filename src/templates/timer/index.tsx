import React, { FC, ReactNode, useContext } from 'react';
import { Container, Title, Footer, BackgroundIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { PrimitivesContext } from '../../contexts/primitivesContext';
import { Timer } from '../../websiteTextContent/Timer';

const TimerTemplate: FC<{ children: ReactNode, buttons: ReactNode }> = ({ children, buttons }) => {
  
  const { currentLanguage } = useContext(PrimitivesContext);
  
  return (
    <Container>
      <Title>{ Timer.title[currentLanguage === 'ENGLISH' ? 'eng' : 'pl'] }</Title>
      { children }
      <BackgroundIcon className="timer-background-icon">
        <FontAwesomeIcon icon={ faHistory } />
      </BackgroundIcon>
      <Footer>
        { buttons }
      </Footer>
    </Container>
  )
}

export default TimerTemplate;