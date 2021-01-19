import styled, { css } from 'styled-components';
import Div from '../../atoms/div';
import ImgProto from '../../atoms/img';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Container = styled(Div)`
  height: auto;
  width: calc(100% - 40px);
  background: #c4c4c4;
  background: #b3b3b3;
  margin: 40px 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 30px;
  min-width: 280px;
  transform: scaleX(0);
  transform-origin: left;
  & > * {
    visibility: hidden;
    opacity: 0;
  }
  @media (max-width: ${EBreakpoints.OFFER_ADVERTISEMENT_BREAK}) {
    flex-wrap: wrap;
  }
`;

export const TextContainer = styled(Div)`
  height: 100%;
  width: 40%;
  text-align: center;
  min-width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media (max-width: ${EBreakpoints.OFFER_ADVERTISEMENT_BREAK}) {
    width: 100%;
  }
`;

export const ImgStyling = css`
  width: 60%;
  height: auto;
  padding: 10px 15px;
  min-width: 260px;
  @media (max-width: ${EBreakpoints.OFFER_ADVERTISEMENT_BREAK}) {
    width: 95%;
  }
`;

export const Img = styled(ImgProto)`
  width: 60%;
  height: auto;
  padding: 10px 15px;
  min-width: 260px;
  @media (max-width: ${EBreakpoints.OFFER_ADVERTISEMENT_BREAK}) {
    width: 95%;
  }
`;