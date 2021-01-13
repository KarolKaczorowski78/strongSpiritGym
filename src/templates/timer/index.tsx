import React, { FC, ReactNode } from 'react';
import { Container, Title, Footer, BackgroundIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';

const TimerTemplate: FC<{ children: ReactNode, buttons: ReactNode }> = ({ children, buttons }) => {
  return (
    <Container>
      <Title>SSG timer</Title>
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