import styled, { css } from 'styled-components';
import ImgProto from '../../../../atoms/img';
import DivProto from '../../../../atoms/div';
import H2Proto from '../../../../atoms/h2';

export const SectionStyling = css`
  height: calc(100vh - 100px);
  min-height: 400px;
`;

export const Img = styled(ImgProto)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

export const TextContainer = styled(DivProto)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & > * {
    margin: 25px 0;
  }
  * {
    color: lightgrey;
  }
`;

export const H2 = styled(H2Proto)`
  font-size: 3rem;
`;