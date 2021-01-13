import React, { useContext } from 'react';
import { TimerContext } from '../../../../contexts/timerContext';
import { Container } from './styles';
import TimeContainer from '../../../molecues/TimeContainer';
import TimerButton from '../../../molecues/TimerButton';
import Span from '../../../atoms/span';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';

const SmallTimer = () => {

  const { isRunning, setIsRunning, runningStatus } = useContext(TimerContext);

  return (
    <Draggable bounds="parent">
      <Container>
        <Span>{ runningStatus }</Span>
        <TimeContainer />
        <TimerButton 
          action={ () => { setIsRunning(state => !state) } }
          icon={ isRunning ? faPause : faPlay }
        />
      </Container>
    </Draggable>
  )
}

export default SmallTimer