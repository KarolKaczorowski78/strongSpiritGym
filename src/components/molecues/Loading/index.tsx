import React from 'react';
import styled, { keyframes } from 'styled-components';
import Div from '../../atoms/div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Circle = styled(Div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2rem;
  margin-top: -2rem;
  & > svg {
    font-size: 4rem;
    animation: ${spin} 4s infinite ease-out;
  }
`;


const LoadingComponent = () => {
  return (
    <Circle>
      <FontAwesomeIcon icon={ faSpinner } />
    </Circle>
  )
}

export default LoadingComponent;