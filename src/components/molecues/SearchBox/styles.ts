import styled from 'styled-components';
import InputProto from '../../atoms/input';
import ButtonProto from '../../atoms/button';
import DivProto from '../../atoms/div';

export const Container = styled(DivProto)`
  * {
    font-size: 1.5rem;
  }
  margin: 15px 0;
`;

export const Input = styled(InputProto)`
  width: 260px;
  padding: 10px 15px;
  border: none;
  background: none;
  border-bottom: 2px solid black;
`;

export const Button = styled(ButtonProto)`
  height: 30px;
  background: none;
  border: none;
`;