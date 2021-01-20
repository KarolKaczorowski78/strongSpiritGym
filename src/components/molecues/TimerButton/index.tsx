import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import ITimerButton from '../../../__types__/ITimerButton';
import { Button } from './styles';

const TimerButton: FC<ITimerButton> = ({ icon, action }) => {

  const { isTouchDevice } = useContext(PrimitivesContext);
  const handleClick = () => {
    action();
  }

  // added onTouchEnd event handler so that it works with Draggable component on touch devices
  return (
    <Button { ...isTouchDevice ? { onTouchEnd: handleClick } : { onClick: handleClick } } > 
      <FontAwesomeIcon icon={ icon } />
    </Button>
  )
}

export default TimerButton;