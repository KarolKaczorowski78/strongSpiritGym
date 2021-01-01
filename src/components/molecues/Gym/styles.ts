import styled from 'styled-components';
import DivProto from '../../atoms/div';
import SpanProto from '../../atoms/span';
import LinkProto from '../../atoms/link';

export const Container = styled(DivProto)`
  position: relative;
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
  padding: 5px 20px;
`;

export const Adress = styled(SpanProto)`
  font-size: 20px;
  display: block;
  text-align: left;
  & > a {
    color: lightgrey;
    text-decoration: none;
  }
`;

export const Link = styled(LinkProto)`
  position: absolute;
  color: lightgrey;
  color: lime;
  text-decoration: none;
  top: 10px;
  right: 10px;
  font-size: 30px;
`;