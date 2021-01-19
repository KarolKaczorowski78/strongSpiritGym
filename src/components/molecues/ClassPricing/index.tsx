import React, { FC, useEffect } from 'react';
import { Container, TextContainer, Button, IconContainer, ImgStyling } from './styles';
import IClassPricing from '../../../__types__/IClassPricing';
import H2 from '../../atoms/h2';
import P from '../../atoms/p';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInView } from 'react-intersection-observer';
import { LazyImg } from '../../atoms/img';
import gsap from 'gsap';

const ClassPricing: FC<IClassPricing> = ({ headling, price, p, img }) => {
  
  const { inView, ref, entry } = useInView({ triggerOnce: true, threshold: .1 });

  useEffect(() => {
    if (inView && entry?.target) {
      gsap.to(entry?.target, { autoAlpha: 1, delay: .3 });
    }
  }, [inView]);
  
  return (
    <Container ref={ ref }>
      <TextContainer>
        <H2>{ headling }</H2>
        <P>
          { p }
        </P>
        <Button>
          { price }
          <IconContainer>
            <FontAwesomeIcon icon={ faFistRaised } />
          </IconContainer>
        </Button>
      </TextContainer>
      <LazyImg src={ img } styling={ ImgStyling } />
    </Container>
  )
}

export default ClassPricing;