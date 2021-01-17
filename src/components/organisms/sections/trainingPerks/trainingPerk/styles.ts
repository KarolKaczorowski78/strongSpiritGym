import styled, { css } from 'styled-components';
import DivProto from '../../../../atoms/div';
import H2Proto from '../../../../atoms/h2';
import PProto from '../../../../atoms/p';
import LinkProto from '../../../../atoms/link';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

export const SectionStyling = css`
  padding: 100px 15px 15px;
  min-height: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  color: lightgrey;
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    padding: 100px 5px 15px;
  }
`;

export const TextContainer = styled(DivProto)`
  margin: 0 15px;
`;

export const H2 = styled(H2Proto)`
  padding-left: 10px;
  border-left: 8px solid red;
  font-size: 3rem;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    font-size: 2.5rem;
    border-width: 5px;
  }
`;

export const P = styled(PProto)`
  max-width: 60ch;
`;

export const Link = styled(LinkProto)`
  color: lightgrey;
  margin: 40px 0 15px 10px;
  font-size: 1.7rem;
  padding: 10px 15px;
  border-left: 4px solid red;
  background: linear-gradient(to right , red 0%, red calc(50% + 1px), black calc(50% + 1px));
  background-size: 200% 100%;
  background-position: right;
  transition: background-position .5s ease-out;
  display: inline-block;
  &:hover {
    background-position: left;
  }
`;