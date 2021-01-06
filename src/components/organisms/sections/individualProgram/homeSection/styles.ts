import styled, { css } from 'styled-components';
import H1Proto from '../../../../atoms/h1';
import { EBreakpoints } from '../../../../../__types__/EBreakpoints';

export const SectionStyling = css`
  height: calc(100vh - 100px);
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5px 15px;
  * { 
    color: lightgrey;
  }
`;

export const H1 = styled(H1Proto)`
  font-size: 3.5rem;
  @media (max-width: ${EBreakpoints.TABLET}) {
    font-size: 2.5rem;
  }
`;