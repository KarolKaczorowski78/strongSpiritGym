import React, { FC, useEffect, useState } from 'react';
import { IStatisticCounterComponent } from '../../../__types__/IStatisticCounter';
import { Div, H2 } from './styles';
import { useInView } from 'react-intersection-observer';
import P from '../../atoms/p';

const StatisticsCounter: FC<IStatisticCounterComponent> = ({ count, text }) => {

  const [countState, setCountState] = useState<number>(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: .75 });

  useEffect(() => {
    if (inView) {
      let localCount = 0;

      const counter = setInterval(() => {
        if (localCount < count) {
          localCount += count / 50;
          setCountState(() => localCount);
        } else {
          clearInterval(counter)
        }
      }, 20);
    }
  }, [inView]);

  return (
    <Div ref={ ref }>
      <H2>{ `+ ${countState}` }</H2>
      <P>{ text }</P>
    </Div>
  )
}

export default StatisticsCounter;