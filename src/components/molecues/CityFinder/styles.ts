import styled from 'styled-components';
import InputProto from '../../atoms/input';
import DivProto from '../../atoms/div';
import ButtonProto from '../../atoms/button';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Container = styled(DivProto)`
  * {
    color: lightgrey;
    font-size: 1.5rem;
  }
`;

export const Button = styled(ButtonProto)`
  padding: 5px 10px;
`;

export const Input = styled(InputProto)`
  width: 300px;
  padding: 5px 8px;
  background: none;
  border: none;
  border-bottom: 2px solid lightgrey;
  @media(max-width: ${EBreakpoints.MOBILE_BIG}) {
    width: 220px;
  }
`;