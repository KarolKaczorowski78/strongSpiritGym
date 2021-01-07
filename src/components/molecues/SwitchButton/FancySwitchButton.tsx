import React, { FC } from 'react';
import SwitchButton from '.';
import styled, { css } from 'styled-components';
import Div from '../../atoms/div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import IFancySwitchButton from '../../../__types__/IFancySwitchButton';

const ButtonStyling = css`
  display: flex;
  align-items: center;
  margin: 30px 0;
  font-size: .8rem;
`;

const IconContainer = styled(Div)`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid lightgrey;
`;

const FancySwitchButton: FC<IFancySwitchButton> = ({ setState, content, state }) => {
  return (
    <SwitchButton setState={ setState } styling={ ButtonStyling }>
      <IconContainer>
        { state && <FontAwesomeIcon icon={ faCheck } /> }
      </IconContainer>&nbsp;&nbsp;
      { content }
    </SwitchButton>
  )
}

export default FancySwitchButton