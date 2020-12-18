import styled from 'styled-components';
import ButtonProto from '../../atoms/button';

export const Button = styled(ButtonProto)`
  transition: .3s ease-in;
  width: 100%;
  height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  background: red;
  background: black;
  opacity: 0;
  font-size: 100%;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`