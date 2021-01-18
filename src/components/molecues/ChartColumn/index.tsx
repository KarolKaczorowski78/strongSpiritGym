import React, { FC, useEffect } from 'react';
import { Container, Top } from './styles';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Chart: FC<{ percentage: number }> = ({ percentage }) => {

  const { entry, ref, inView } = useInView();

  useEffect(() => {
    if (inView && entry?.target) {
      gsap.to(entry.target, { height: `${percentage}%`, ease: 'power1', duration: .5 });
    }
  }, [inView]);

  return (
    <Container ref={ ref }>
      <Top />
    </Container>
  )
}

export default Chart;