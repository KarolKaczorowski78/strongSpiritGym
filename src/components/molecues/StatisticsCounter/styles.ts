import styled from 'styled-components';
import DivProto from '../../atoms/div';
import H2Proto from '../../atoms/h2';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Div = styled(DivProto)`
  height: 250px;
  text-align: center;
  width: 300px;
  @media (max-width: ${EBreakpoints.OFFER_ADVERTISEMENT_BREAK}) {
    width: 250px;
  }
`;

export const H2 = styled(H2Proto)`
  font-size: 3.2rem;
`;