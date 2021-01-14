import React, { FC } from 'react';
import { Container, Button, ButtonsContainer, TimeContainer } from './styles';
import ITimeSetter from '../../../__types__/ITimeSetter';
import Div from '../../atoms/div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const TimerSetter: FC<ITimeSetter> = ({ state, content, setState, setStateValue, maxStateValue }) => {
  return (
    <Container>
      <Div>{ content }</Div>
      <ButtonsContainer>
        <Button onClick={ () => { setState(previous => previous === setStateValue ? previous : previous - setStateValue) } }>
          <FontAwesomeIcon icon={ faMinus } />
        </Button>
        &nbsp;&nbsp;&nbsp;
        <TimeContainer>
          { state }
        </TimeContainer>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={ () => { setState(previous => previous === maxStateValue ? previous : previous + setStateValue) } }>
          <FontAwesomeIcon icon={ faPlus } />
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default TimerSetter;