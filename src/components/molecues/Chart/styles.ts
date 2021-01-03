import styled from 'styled-components';
import DivProto from '../../atoms/div';

export const Container = styled(DivProto)`
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  font-size: .8rem;
  text-align: left;
  margin: 15px 0;
  border-left: 2px solid red;
  & > span {
    width: 90px;
  }
`;

export const Box = styled(DivProto)`
  height: 20px;
  background: lightgrey;
  flex: 0;
  position: relative;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: linear-gradient(25deg, #757575, #8f8f8f, #adadad);
  * {
    color: lightgrey;
  }
`;

export const Circle = styled(DivProto)`
  height: 20px;
  width: 15px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -7.5px;
  border: 2px solid black;
  background: #9e9e9e;
`;