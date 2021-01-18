import styled, { css } from 'styled-components';
import H2Proto from '../../../../atoms/h2';
import DivProto from '../../../../atoms/div';
import PProto from '../../../../atoms/p';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';
import LinkProto from '../../../../atoms/link';

export const SectionStyling = css`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  & > div {
    margin: 0 15px;
  }
`;

export const H2 = styled(H2Proto)`
  font-size: 2.7rem;
  padding-left: 10px;
  border-left: 8px solid red;
`;

export const TextContainer = styled(DivProto)`
  text-align: left;
`;

export const ChartContainer = styled(DivProto)`
  width: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  height: 500px;
  padding-top: 50px;
  border-bottom: 6px solid black;
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 100%;
    height: 300px;
    padding-top: 0;
    & > div {
      &:first-of-type {
        display: none;
      }
    }
  }
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    & > div:last-of-type {
      display: none;
    }
  }
`;

export const P = styled(PProto)`
  max-width: 55ch;
`;

export const Link = styled(LinkProto)`
  color: black;
  margin: 25px 0;
  display: inline-block;
  margin-left: 15px;
  font-size: 1.4rem;
  padding: 10px 15px;
  border-left: 4px solid red;
  background: linear-gradient(to right , red 0%, red calc(50% + 1px), lightgrey calc(50% + 1px));
  background-size: 200% 100%;
  background-position: right;
  transition: .5s ease-out;
  &:hover {
    background-position: left;
    color: lightgrey;
  }
`;