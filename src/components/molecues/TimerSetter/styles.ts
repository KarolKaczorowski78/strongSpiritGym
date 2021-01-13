import styled from 'styled-components';
import DivProto from '../../atoms/div';
import ButtonProto from '../../atoms/button';
import SpanProto from '../../atoms/span';

export const Container = styled(DivProto)`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  * {
    color: lightgrey;
  }
`;

export const Button = styled(ButtonProto)`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
`;

export const ButtonsContainer = styled(DivProto)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const TimeContainer = styled(SpanProto)`
  width: 50px;
  text-align: center;
`;