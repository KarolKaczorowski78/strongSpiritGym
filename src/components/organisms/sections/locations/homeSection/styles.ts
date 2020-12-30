import styled, { css } from 'styled-components';
import DivProto from '../../../../atoms/div';
import ImgProto from '../../../../atoms/img';
import H1Proto from '../../../../atoms/h1';

export const TextContainer = styled(DivProto)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  background: rgba(0, 0, 0, .6);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin: 20px 0;
    color: lightgrey;
  }
`;

export const Img = styled(ImgProto)`
  width: 100%;
  height: 100%;
  object-position: bottom;
  object-fit: cover;
`;

export const SectionStyling = css`
  height: calc(100vh - 100px);
  min-height: 400px;
  margin-top: 100px;
`;


export const H1 = styled(H1Proto)`
  font-size: 3.5rem;
  text-transform: uppercase;
`;