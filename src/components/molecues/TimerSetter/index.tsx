import React, { FC, useRef, useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Container, Button, ButtonsContainer, TimeContainer } from './styles';
import ITimeSetter from '../../../__types__/ITimeSetter';
import Div from '../../atoms/div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const TimerSetter: FC<ITimeSetter> = ({ state, content, setState, setStateValue, maxStateValue }) => {
  
  const { isTouchDevice } = useContext(PrimitivesContext);
  const eventTimeout = useRef<number>(0);
  const stateInterval = useRef<number>(0);

  const handleMouseDown = (action: () => void) => {
    action();
    
    eventTimeout.current = setTimeout(() => {
      stateInterval.current = setInterval(() => {
        action();
      }, 50);
    }, 1000);
  }

  const handleMouseUp = () => {
    clearTimeout(eventTimeout.current);
    clearInterval(stateInterval.current);
  }

  const actionDecrease = () => {
    setState(previous => previous === setStateValue ? previous : previous - setStateValue);
  }

  const actionIncrease = () => {
    setState(previous => previous === maxStateValue ? previous : previous + setStateValue)
  }
  
  return (
    <Container>
      <Div>{ content }</Div>
      <ButtonsContainer>
        <Button 
          onMouseDown={ () => !isTouchDevice && handleMouseDown(actionDecrease) }
          onTouchStart={ () => handleMouseDown(actionDecrease) }
          onMouseUp={ handleMouseUp } 
          onTouchEnd={ handleMouseUp }
        >
          <FontAwesomeIcon icon={ faMinus } />
        </Button>
        &nbsp;&nbsp;&nbsp;
        <TimeContainer>
          { state }
        </TimeContainer>
        &nbsp;&nbsp;&nbsp;
        <Button 
          onMouseDown={ () => !isTouchDevice && handleMouseDown(actionIncrease) }
          onTouchStart={ () => handleMouseDown(actionIncrease) }
          onMouseUp={ handleMouseUp }  
          onTouchEnd={ handleMouseUp } 
        >
          <FontAwesomeIcon icon={ faPlus } />
        </Button>
      </ButtonsContainer>
    </Container>
  )
}

export default TimerSetter;