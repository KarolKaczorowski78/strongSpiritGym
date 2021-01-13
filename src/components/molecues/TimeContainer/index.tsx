import React, { useContext, FC, useEffect, useRef } from 'react';
import { TimerContext } from '../../../contexts/timerContext';
import { Container } from './styles';
import { toTimerFormat } from '../../../universal/toTimerFormat';
import gsap from 'gsap';

const TimeContainer: FC<{ fontSizeRem?: number }> = ({ fontSizeRem }) => {

  const { currentTime, warningTime } = useContext(TimerContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentTime <= warningTime) {
      gsap.timeline()
        .to(ref.current, { scale: 1.2 })
        .to(ref.current, { scale: 1 });
    }
  }, [currentTime]);

  return (
    <Container fontSizeRem={ fontSizeRem } color={ currentTime <= warningTime ? 'red' : 'lightgrey' } ref={ ref }>
      { toTimerFormat(currentTime) }
    </Container>
  )
}

export default TimeContainer;