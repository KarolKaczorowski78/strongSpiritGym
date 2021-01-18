import styled from 'styled-components';
import ButtonProto from '../../atoms/button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 10px;
  position: relative;
  font-size: 1.3rem;
  input, select {
    background: rgba(0, 0, 0, .3);
  }
  & > input {
    border: 1px solid lightgrey;
    padding: 8px 5px;
    margin-bottom: 10px;
  }
  & > label {
    margin: 5px 0;
  }
  & > select {
    margin: 0 0 10px;
    & > option {
      color: black;
    }
  }
`;

export const Submit = styled(ButtonProto)`
  border: none;
  margin: 15px 0 10px 15px;
  color: lightgrey;
  font-size: 1.4em;
  position: relative;
  ::before, ::after {
    position: absolute;
    content: '';
    left: -11px;
    bottom: -11px;
    background: red;
    transition: .45s ease-out;
  }
  ::before {
      width: 4px;
      height: calc(100% + 20px);
      transform-origin: bottom;
  }
  ::after {
      height: 4px;
      width: calc(100% + 20px);
      transform-origin: left;
      transform: scaleX(0);
  }
  }
  &:hover {
      ::before {
          transform: scaleY(0);
      }
      ::after {
          transform: scaleX(1);
      }
  }
  
`;