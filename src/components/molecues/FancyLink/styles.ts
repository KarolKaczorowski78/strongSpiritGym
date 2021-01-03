import styled from 'styled-components';
import LinkProto from '../../atoms/link';

export const Link = styled(LinkProto)<{ fontSizeRem?: number, color?: string, }>`
  font-size: 1.2rem;
  font-size: ${({ fontSizeRem }) => fontSizeRem ? `${fontSizeRem}rem` : '1.2rem'}
  text-transform: uppercase;
  color: ${({ color }) => color ? color : 'black'};
  & > svg {
    transition: .3s;
  }
  &:hover {
    & > svg {
      transform: translateX(10px);
    }
  }
`;