import styled from 'styled-components';
import DivProto from '../../atoms/div';

export const Bar = styled(DivProto)`
  width: 200px;
  height: 30px;
  border: 2px solid lightgrey;
  background: lightgrey;
  position: relative;
  background: none;
`;

export const Progress = styled(DivProto)<{ widthPercent: number }>`
  height: 100%;
  width: ${({ widthPercent }) => `${widthPercent}%`};
  background: red;
`;