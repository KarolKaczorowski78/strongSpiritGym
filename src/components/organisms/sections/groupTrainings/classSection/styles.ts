import styled, { css } from 'styled-components';
import Div from '../../../../atoms/div';
import ImgProto from '../../../../atoms/img';
import Ul from '../../../../atoms/ul';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

export const SectionStyling = css`
  padding-top: 50px;
`;

export const Container = styled(Div)`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  text-align: center;
  background: #b3b3b3;
  background: linear-gradient(-90deg, #b3b3b3, #999999, #000000);
  flex-wrap: wrap;
  @media (max-width: ${EBreakpoints.TABLET}) {
    height: auto;
    background: none;
    margin: 20px 0;
  }
`;

export const TextContainer = styled(Div)`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  @media (max-width: ${EBreakpoints.TABLET}) {
    height: auto;
  }
`; 

export const Img = styled(ImgProto)`
  transform: rotate(5deg);
  height: 100%;
  border: 3px solid black;
  @media (max-width: ${EBreakpoints.TABLET}) {
    transform: none;
    width: 300px;
    height: auto;
  }
`;

export const StrengthsList = styled(Ul)`
  text-align: left;
  & > li > svg {
    color: red;
  }
`;