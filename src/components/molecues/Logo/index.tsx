import React, { FC } from 'react';
import styled from 'styled-components';
import Span from '../../atoms/span';
import Link from '../../atoms/link';
import { EMainRoutes } from '../../../__types__/ERoutes';
import ILogo from '../../../__types__/ILogo';

const LogoStyle = styled(Span)<{ size: number }>`
  text-transform: uppercase;
  font-style: oblique;  
  font-weight: bold;
  font-size: 40px;
  font-size: ${({ size }) => size}rem;
  width: auto;
  font-family: Impact, Charcoal, sans-serif;
  text-decoration: none;
  position: relative;
  z-index: 2;
  color: red;
  color: lightgrey;
  margin-right: 100px;
  ::after {
    width: 100px;
    left: 110%;
    top: 5px;
    content: 'fight club';
    text-decoration: underline;
    font-family: initial;
    position: absolute;
    font-size: 15px;
    font-size: 37.5%;
  }
`;

const Logo:FC<ILogo> = ({ linkedToHome, size }) => {
  return (
    <LogoStyle size={ size }>
      { 
        linkedToHome ? 
          <Link style={{ color: 'lightgrey' }} to={ EMainRoutes.HOME }>ssg</Link> 
          : 'ssg' }
    </LogoStyle>
  )
}

export default Logo;