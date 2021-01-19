import styled, { css } from 'styled-components';
import Div from '../../atoms/div';
import ImgProto from '../../atoms/img';
import ButtonProto from '../../atoms/button';

export const Container = styled(Div)`
  width: 300px;
  height: 450px;
  position: relative;
  margin: 20px 10px;
  transition: transform .3s ease-out;
  opacity: 0;
  visibility: hidden;
  &:hover {
    transform: translateY(-7px);
  }
`;

export const ImgStyling = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Img = styled(ImgProto)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled(Div)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 0 8px lightgrey;
  background: rgba(0, 0, 0, .3);
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px 15px;
  * {
    text-shadow: 0 0 5px black;
    color: lightgrey;
  }
`;

export const Button = styled(ButtonProto)`
  background: rgba(0, 0, 0, .6);
  padding: 10px 15px;
  font-size: 1rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`;

export const IconContainer = styled(Div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  transition: opacity .4s ease-out;
  opacity: 0;
  background: black;
  font-size: 1.4rem;
  &:hover {
    opacity: 1;
  }
`;
