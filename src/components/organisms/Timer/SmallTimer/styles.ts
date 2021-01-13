import styled from 'styled-components';
import DivProto from '../../../atoms/div';

export const Container = styled(DivProto)`
  position: fixed;
  top: 110px;
  right: 10px;
  z-index: 3;
  background: black;
  color: lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2rem;
  padding: 10px 15px;
  border: 2px solid lightgrey;
  & > * {
    margin: 5px 0;
  }
`;