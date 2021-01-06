import styled from 'styled-components';
import DivProto from '../../atoms/div';
import SpanProto from '../../atoms/span';
import { EBreakpoints }from '../../../__types__/EBreakpoints';

export const Container = styled(DivProto)`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  background: #0d0d0d;
  box-shadow: 0 0 12px red;
  display: inline-flex;
  margin: 20px 15px;
  flex-direction: column;
  position: relative;
  align-items: center;
  font-size: 25px;
  justify-content: space-evenly;
  & > svg {
    color: red;
    font-size: 2em;
  }
  @media (max-width: ${EBreakpoints.TABLET}) {
    font-size: 20px;
    width: 120px;
    height: 120px; 
  }
  @media (max-width: ${EBreakpoints.MOBILE_BIG}) {
    font-size: 16px;
    width: 100px;
    height: 100px;
    margin: 15px 10px;
  }
`;

export const Text = styled(SpanProto)`
  color: lightgrey;
  font-size: .6em;
`

export const IndexContainer = styled(SpanProto)`
  position: absolute;
  top: 10px;
  left: 15px;
  color: lightgrey;
  font-size: 1.2em;
`;