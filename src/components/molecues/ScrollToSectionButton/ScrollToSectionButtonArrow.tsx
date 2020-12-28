import React, { FC } from 'react';
import ScrollToSectionButton from './';
import { IScrollToSectionButtonArrow } from '../../../__types__/IScrollToSectionButton';
import { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const arrowAnimation = keyframes`
  from {
    transform: translateY(-7px);
  }
  to {
    transform: translateY(7px);
  }
`;

const ButtonStyling = css`
  font-size: 1.25rem;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  font-weight: bold;
  & > svg {
    display: block;
    margin: 5px auto;
    animation: ${arrowAnimation} .8s ease-out infinite;
  }
`;

const ScrollToSectionButtonArrow: FC<IScrollToSectionButtonArrow> = ({ targetSection, content }) => {
  return (
    <ScrollToSectionButton
      styling={ ButtonStyling }
      targetSection={ targetSection }
    >
      { content }
      <FontAwesomeIcon icon={ faChevronDown } />
    </ScrollToSectionButton>
  )
}

export default ScrollToSectionButtonArrow;