import styled, { css } from 'styled-components';
import H1Proto from '../../../../atoms/h1';
import DivProto from '../../../../atoms/div';
import ImgProto from '../../../../atoms/img';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

export const H1 = styled(H1Proto)`
  font-size: 4.5rem;
  text-transform: uppercase;
  text-decoration: underline;
  text-decoration-color: red;
  text-decoration-thickness: .3rem;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: lightgrey;
  background: rgba(0, 0, 0, .4);
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    font-size: 3rem;
  }
`;

export const SectionStyling = css`
  text-align: center;
  padding: 120px 15px 20px;
  min-height: auto;
`;

export const HeadlingContainer = styled(DivProto)`
  position: relative;
  width: 100%;
  height: 400px;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    height: 250px;
  }
  @media (max-width: ${EBreakpoints.MOBILE_SMALL}) {
    height: 200px;
  }
`;

export const Img = styled(ImgProto)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;