import styled, { css } from 'styled-components';
import Button from '../../atoms/button';
import Div from '../../atoms/div';

export const Container = styled(Div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const ButtonStyle = css`
  color: white;
`;

export const ShowSubTopicsButton = styled(Button)`
  background: none;
  border: none;
  color: white;
`;