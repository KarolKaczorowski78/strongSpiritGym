import React, { FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import ButtonProto from '../../atoms/button';
import IScrollToSectionButton from '../../../__types__/IScrollToSectionButton';

const Button = styled(ButtonProto)<{ styling: FlattenSimpleInterpolation }>`
  ${({ styling }) => styling};
`

const ScrollToSectionButton: FC<IScrollToSectionButton> = ({ children, styling, targetSection }) => {
  
  const handleClick = () => {
    const targetElement = document.querySelector(`#${targetSection}`);

    targetElement && targetElement.scrollIntoView({ block: 'start', behavior: 'smooth', })
  }

  return (
    <Button styling={ styling } onClick={ handleClick }>
      { children }
    </Button>
  )
}

export default ScrollToSectionButton;