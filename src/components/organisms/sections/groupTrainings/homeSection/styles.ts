import styled, { css } from 'styled-components';
import Div from '../../../../atoms/div';
import ImgProto from '../../../../atoms/img';

export const SectionStyling = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  * {
    color: lightgrey;
  }
`;

export const Container = styled(Div)`
  padding: 0 15px;
  width: 100%;
  height: 80vh;
  position: relative;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const TextContainer = styled(Div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  text-shadow: 0 0 5px black;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, .6);
  * {
    margin: 20px 0;
  }
`;

export const Img = styled(ImgProto)`
  width: auto;
  height: 100%;
  object-fit: contain;
`;
