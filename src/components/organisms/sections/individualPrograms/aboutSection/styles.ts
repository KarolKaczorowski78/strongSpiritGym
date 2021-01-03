import styled, { css } from 'styled-components';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';
import H2Proto from '../../../../atoms/h2';
import PProto from '../../../../atoms/p';

export const SectionStyling = css`
  color: lightgrey;
  background: black;
  padding: 40px 30px 20px;
`;

export const H2 = styled(H2Proto)`
  font-size: 3.5rem;
  padding-left: 15px;
  border-left: 8px solid red;
  margin: 0;
  text-transform: uppercase;
  @media (max-width: ${EBreakpoints.TABLET}) {
    font-size: 2rem;
  }
`;

export const P = styled(PProto)`
  max-width: 45ch;
  padding-left: 25px;
`;

export const ButtonStyling = css`
  color: lightgrey;
  margin: 15px 0;
  margin-left: 25px;
  font-size: 1.4rem;
  padding: 10px 15px;
  border-left: 4px solid red;
  background: linear-gradient(to right , red 0%, red calc(50% + 1px), black calc(50% + 1px));
  background-size: 200% 100%;
  background-position: right;
  transition: background-position .5s ease-out;
  &:hover {
    background-position: left;
  }
`;