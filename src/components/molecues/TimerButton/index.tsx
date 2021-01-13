import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import ITimerButton from '../../../__types__/ITimerButton';
import { Button } from './styles';

const TimerButton: FC<ITimerButton> = ({ icon, action }) => {

  const handleClick = () => {
    action();
  }

  // added onTouchEnd event handler so that it works with Draggable component on touch devices
  return (
    <Button onClick={ handleClick } onTouchEnd={ handleClick }> 
      <FontAwesomeIcon icon={ icon } />
    </Button>
  )
}

export default TimerButton;