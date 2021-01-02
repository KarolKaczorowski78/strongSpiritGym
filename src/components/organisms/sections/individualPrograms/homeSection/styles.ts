import styled, { css } from 'styled-components';
import ImgProto from '../../../../atoms/img';
import DivProto from '../../../../atoms/div';
import H1Proto from '../../../../atoms/h1';
import PProto from '../../../../atoms/p';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

export const H1 = styled(H1Proto)`
  font-size: 3.5rem;
  text-transform: uppercase;
  padding-left: 10px;
  border-left: 8px solid red;
  & > span {
    display: block;
    & > span {
      color: red;
    }
  }
  @media (max-width: ${EBreakpoints.NAV_BREAK}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    font-size: 2rem;
  }
`;

export const P = styled(PProto)`
  max-width: 50ch;
  padding-left: 15px;
`;

export const SectionStyling = css`
  padding: 0 15px;
  margin-top: 100px;
  height: calc(100vh - 100px);
  color: lightgrey;
  min-height: 450px;
  display: flex;
  justify-content: space-between;
  background: black;
`;

export const TextContainer = styled(DivProto)`
  flex: .9;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5%;
  justify-content: flex-start;
  text-align: left;
`;  

export const Img = styled(ImgProto)`
  height: 100%;
  width: auto;
  object-fit: cover;
`;