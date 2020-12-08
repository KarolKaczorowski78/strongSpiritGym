import React, { FC, useContext, useEffect, useState } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import IStatisticCounter from '../../../__types__/IStatisticCounter';
import { Div } from './styles';
import { useInView } from 'react-intersection-observer';
import H2 from '../../atoms/h2';
import P from '../../atoms/p';

const StatisticsCounter: FC<IStatisticCounter> = ({ count, pl, eng }) => {

  const [countState, setCountState] = useState<number>(0);
  const { currentLanguage } = useContext(PrimitivesContext);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });

  useEffect(() => {
    if (inView) {
      let localCount = 0;

      const counter = setInterval(() => {
        if (localCount < count) {
          localCount += count / 50;
          setCountState(() => count);
        } else {
          clearInterval(counter)
        }
      });
    }
  }, [inView]);

  return (
    <Div ref={ ref }>
      <H2>{ countState }</H2>
      <P>{ currentLanguage === 'ENGLISH' ? eng : pl }</P>
    </Div>
  )
}

export default StatisticsCounter;