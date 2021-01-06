import styled, { css } from 'styled-components';
import ImgProto from '../../../../atoms/img';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';
import DivProto from '../../../../atoms/div';

export const SectionStyling = css`
  background: black;
  color: lightgrey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 15px 0;
  overflow-x: hidden;
  & > * {
    margin: 15px 20px;
  }
`;

export const Img = styled(ImgProto)`
  height: calc(100vh - 200px);
  box-shadow: 0 0 20px red;
  border: 1px solid black;
  z-index: 1;
  min-height: 300px;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 70vw;
    height: auto;
    min-width: 280px;
  }
`;

export const TextContainer = styled(DivProto)`
  width: 400px;
  position: relative;
  text-align: center;
  z-index: 1;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 280px;
  }
`;

export const CostContainer = styled(DivProto)`
  margin: 15px 0 40px;
  width: 100%;
  & > svg {
    transform: rotate(-5deg);
  }
`;

export const ChartsContainer = styled(DivProto)`
  margin: 10px 0 35px;
  padding: 15px 0;
  border-top: 2px solid lightgrey;
  border-bottom: 2px solid lightgrey;
`;

export const BackgroundIcon = styled(DivProto)`
  position: absolute;
  bottom: 0px;
  right: 10px;
  font-size: 30rem;
  z-index: 0;
  & > svg {
    transform: rotate(-10deg);
    color: #0d0d0d;
  }
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    font-size: 20rem;
  }
`;