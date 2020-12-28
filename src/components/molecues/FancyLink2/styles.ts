import styled from 'styled-components';
import LinkProto from '../../atoms/link';

export const Link = styled(LinkProto)<{ fontSizeRem: number }>`
  font-size: ${({ fontSizeRem }) => `${fontSizeRem}rem`};
  padding: 10px 15px;
  border-left: 2px solid lightgrey;
  text-align: center;
  transition: .3s ease-out;
  &:hover {
    background: lightgrey;
    color: black;
    text-decoration: underline;
  }
`;