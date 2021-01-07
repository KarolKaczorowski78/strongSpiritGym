import styled from 'styled-components';
import DivProto from '../../atoms/div';
import PProto from '../../atoms/p';
import SpanProto from '../../atoms/span';

export const Container = styled(DivProto)`
  width: 300px;
  height: auto;
  background: rgba(0, 0, 0, .5);
  border: 1px solid lightgrey;
  padding: 30px 20px;
  display: inline-block;
  margin: 15px 20px;
  border-radius: 15px;
  position: relative;
`;

export const Intro = styled.h3`
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const Specialization = styled(PProto)`
  font-size: 1rem;
  text-transform: uppercase;
`

export const Email = styled.a`
  font-size: .8rem;
  text-decoration: none;
`;

export const Span = styled(SpanProto)`
  display: block;
`;

export const BackgroundIcon = styled(DivProto)`
  font-size: 8rem;
  position: absolute;
  top: 0;
  left: 0;
  color: #0d0d0d;
  opacity: .3;
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
`;