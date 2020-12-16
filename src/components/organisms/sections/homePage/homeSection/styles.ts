import styled, { css } from 'styled-components';
import H1Proto from '../../../../atoms/h1';
import ImgProto from '../../../../atoms/img';
import SpanProto from '../../../../atoms/span';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

export const H1 = styled(H1Proto)`
  font-size: 4rem;
  text-transform: uppercase;
  text-shadow: 0 0 10px black;
  color: lightgrey;
  margin: 0;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    font-size: 2.8rem;
  }
`;

export const Span = styled(SpanProto)`
  display: block;
`;

export const Img = styled(ImgProto)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: top right;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

export const ButtonStyling = css`
  position: absolute;
  bottom: 10px;
  width: 150px;
  height: auto;
  left: 50%;
  background: none;
  border: none;
  margin-left: -75px;
  padding-top: 16px;
  & > svg {
    color: lightgrey;
    font-size: 30px;
    display: block;
    margin: -17px auto 0;
  }
`;
