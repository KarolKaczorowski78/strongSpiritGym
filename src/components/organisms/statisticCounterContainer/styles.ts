import styled from 'styled-components';
import Div from '../../atoms/div';
import { EBreakpoints } from '../../../__types__/EBreakpoints';

export const Container = styled(Div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 10px;
  background: black;
  * {
    text-align: center;
    color: white;
  }
  @media (max-width: ${EBreakpoints.TABLET}) {
    flex-direction: column;
  }
`;