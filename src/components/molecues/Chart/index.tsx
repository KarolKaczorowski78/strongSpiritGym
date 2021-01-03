import React, { FC, useEffect } from 'react';
import IChart from '../../../__types__/IChart';
import { Box, Container, Circle } from './styles';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Chart: FC<IChart> = ({ propName, percentage }) => {

  const { ref, entry, inView } = useInView();

  useEffect(() => {
    if (inView && entry?.target) {
      gsap.to(entry.target, { flex: percentage, duration: 1 });
    }
  }, [inView])

  return (
    <Container>
      <span>{ propName }&nbsp;&nbsp;&nbsp;</span>
      <Box ref={ ref }>
        <Circle />
      </Box>
    </Container>
  )
}

export default Chart;