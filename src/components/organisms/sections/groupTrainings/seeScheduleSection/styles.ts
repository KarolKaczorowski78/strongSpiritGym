import styled, { css, keyframes } from 'styled-components';
import ImgProto from '../../../../atoms/img';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';
import Div from '../../../../atoms/div';
import H1Proto from '../../../../atoms/h1';
import LinkProto from '../../../../atoms/link';

export const pulseEffect = keyframes`
  0% {
    transform: scale(1.03)
  }
  70% {
    transform: scale(.97)
  }
  100% {
    transform: scale(1.03)
  }
`;

export const SectionStyling = css`
  height: calc(100vh - 100px);
  min-height: 300px;
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .5);
  flex-direction: column;
  * {
    color: lightgrey;
    margin: 20px 0;
  }
`;

export const H1 = styled(H1Proto)`
  font-size: 4rem;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    font-size: 2rem;
  }
`;

export const Link = styled(LinkProto)`
  margin-top: 30px;
  font-size: 2rem;
  text-transform: uppercase;
  border: 2px solid lightgrey;
  padding: 15px 20px;
  background: rgba(235, 20, 20, .2);
  animation: ${pulseEffect} 1s ease-out infinite;
`