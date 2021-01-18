import styled from 'styled-components';
import { EBreakpoints } from '../../../__types__/EBreakpoints';
import ButtonProto from '../../atoms/button';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  position: relative;
  margin-top: 20px;
  input, textarea {
    border: none;
    width: 100%;
    margin-bottom: 20px;
    padding: 20px 15px;
    color: lightgrey;
    background: rgba(0, 0, 0, .3);
    border-bottom: 3px solid red;
  }
  select, option {
    color: lightgrey;
  }
  label {
    margin-bottom: 6px;
  }
  @media (max-width: ${EBreakpoints.TABLET_SMALL}) {
    width: 280px;
  }
`;

export const Submit = styled(ButtonProto)`
  font-size: 1.2rem;
  padding: 20px 40px;
  margin: 20px 0;
  background: black;
  border: 3px solid red;
  color: lightgrey;
  font-weight: bold;
  & > svg {
    color: red;
  }
`;