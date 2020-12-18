import styled from 'styled-components';
import Div from '../../atoms/div';

export const TableContainer = styled(Div)`
  width: 100%;
  height: calc(100vh - 200px);
  overflow: auto;
  padding: 0 10px;
`;

export const Table = styled.table`
  margin: 0 auto;
  th, td {
    border: 1px solid lightgrey;
    width: auto;
    height: 50px;
    min-width: 120px;
    text-align: center;
    font-size: 100%;
  }
`;