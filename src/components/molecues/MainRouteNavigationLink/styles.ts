import styled, { css } from 'styled-components';
import Button from '../../atoms/button';
import Div from '../../atoms/div';

export const Container = styled(Div)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;
`;

export const ButtonStyle = css`
  color: white;
`;

export const ShowSubTopicsButton = styled(Button)`
  background: none;
  border: none;
  color: white;
`;

export const ChildRouteLinksContainer = styled(Div)`
  padding: 5px 8px;
  background: lightgrey;
  position: absolute;
  left: 0;
  top: calc(100% + 5px);
  border-radius: 5%;
  border: 1px solid black;
  height: 50px;
  width: 50px;
`;