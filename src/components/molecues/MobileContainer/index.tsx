import React, { FC } from 'react';
import { Container, Part, MenuButton, Speaker } from './styles';
import ImageSlider from '../ImageSlider';

const MobileContainer: FC<{ imgSrcs: string[] }> = ({ imgSrcs }) => {
  return (
    <Container>
      <Part>
        <Speaker />
      </Part>
      <ImageSlider images={ imgSrcs } />
      <Part>
        <MenuButton />
      </Part>
    </Container>
  )
}

export default MobileContainer;