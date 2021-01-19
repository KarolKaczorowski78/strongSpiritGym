import React, { FC, useEffect } from 'react';
import { Container, Img, TextContainer, ImgStyling } from './styles';
import P from '../../atoms/p';
import H2 from '../../atoms/h2';
import { IOfferAdvertisement } from '../../../__types__/IOffer';
import FancyLink from '../FancyLink';
import { LazyImg } from '../../atoms/img';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const OfferAdvertisement: FC<IOfferAdvertisement> = ({ headling, imgSrc, linkContent, linkPath, p }) => {
  
  const { inView, ref, entry } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && entry?.target.childNodes) {
      gsap.timeline({ defaults: { duration: .8 } })
        .to(entry.target, { scaleX: 1, delay: .5 })
        .to(entry.target.childNodes, { autoAlpha: 1 })
    }
  }, [inView]);
  
  return (
    <Container ref={ ref }>
      <LazyImg src={ imgSrc } styling={ ImgStyling } />
      <TextContainer>
        <H2>{ headling }</H2>
        <P>{ p }</P>
        <FancyLink linkContent={ linkContent } linkPath={ linkPath } />
      </TextContainer>
    </Container>
  )
}

export default OfferAdvertisement;