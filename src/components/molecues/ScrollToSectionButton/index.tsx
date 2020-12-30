import React, { FC } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import ButtonProto from '../../atoms/button';
import IScrollToSectionButton from '../../../__types__/IScrollToSectionButton';

const Button = styled(ButtonProto)<{ styling: FlattenSimpleInterpolation }>`
  ${({ styling }) => styling};
`

const ScrollToSectionButton: FC<IScrollToSectionButton> = ({ children, styling, targetSection, parentId, sideFunction }) => {
  
  const handleClick = () => {
    const targetElement: HTMLElement | null = document.querySelector(`#${targetSection}`);

    targetElement && (parentId ? document.querySelector(`#${parentId}`) as HTMLDivElement : window).scrollTo({ 
      top: targetElement.offsetTop - 100,
      behavior: 'smooth',
    })

    sideFunction && sideFunction();
  }

  return (
    <Button styling={ styling } onClick={ handleClick }>
      { children }
    </Button>
  )
}

export default ScrollToSectionButton;