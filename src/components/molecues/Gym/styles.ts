import styled from 'styled-components';
import DivProto from '../../atoms/div';
import SpanProto from '../../atoms/span';

export const Container = styled(DivProto)`
  width: 250px;
  height: 200px;
  display: inline-block;
  margin: 10px 20px;
  border-radius: 15px;
  background: black;
  color: lightgrey;
  display: inline-flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: flex-start;
  float: left;
`;

export const Adress = styled(SpanProto)`
  font-size: 20px;
  display: block;
  text-align: left;
  padding: 5px 20px;
  & > a {
    color: lightgrey;
    text-decoration: none;
  }
`;