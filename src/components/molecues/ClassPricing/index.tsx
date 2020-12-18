import React, { FC } from 'react';
import { Container, TextContainer, Img, Button, IconContainer } from './styles';
import IClassPricing from '../../../__types__/IClassPricing';
import H2 from '../../atoms/h2';
import P from '../../atoms/p';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ClassPricing: FC<IClassPricing> = ({ headling, price, p, img }) => {
  return (
    <Container>
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
      <Img src={ img } alt="" />
    </Container>
  )
}

export default ClassPricing;