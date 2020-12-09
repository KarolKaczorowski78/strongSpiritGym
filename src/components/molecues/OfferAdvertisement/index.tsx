import React, { FC } from 'react';
import { Container, Img, TextContainer } from './styles';
import P from '../../atoms/p';
import H2 from '../../atoms/h2';
import { IOfferAdvertisement } from '../../../__types__/IOffer';
import FancyLink from '../FancyLink';

const OfferAdvertisement: FC<IOfferAdvertisement> = ({ headling, imgSrc, linkContent, linkPath, p }) => {
  return (
    <Container>
      <Img alt="" src={ imgSrc } />
      <TextContainer>
        <H2>{ headling }</H2>
        <P>{ p }</P>
        <FancyLink linkContent={ linkContent } linkPath={ linkPath } />
      </TextContainer>
    </Container>
  )
}

export default OfferAdvertisement;