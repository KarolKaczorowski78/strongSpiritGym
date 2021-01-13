import styled from 'styled-components';
import DivProto from '../../../atoms/div';

export const StatusContainer = styled(DivProto)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  * {
    color: lightgrey;
  }
`;

export const TimeContainerContainer = styled(DivProto)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * {
    color: lightgrey;
  }
`;