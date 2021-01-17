import React, { FC, useEffect, useState, useRef } from 'react';
import useInterval from 'use-interval';
import { Container, Img } from './styles';

const ImageSlider: FC<{ images: string[] }> = ({ images }) => {

  const ref = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<-1 | 1>(1);
  const [counter, setCounter] = useState<number>(1);
  
  useInterval(() => {
    setCounter(previous => previous + direction);
  }, 4000);

  useEffect(() => {
    let newDirection = (counter === 1 || counter === images.length) ? (counter === 1 ? 1 : -1) : direction;

    setDirection(() => newDirection);

    ref.current?.scrollTo({
      left: ref.current.clientWidth * newDirection,
      behavior: 'smooth',
    })
  }, [counter]);

  return (
    <Container ref={ ref }>
      { images.map(src => <Img src={ src } alt="" />) }
    </Container>
  )
}

export default ImageSlider;