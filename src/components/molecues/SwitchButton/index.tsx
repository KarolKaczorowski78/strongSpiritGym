import React, { FC } from 'react';
import ISwitchButton from '../../../__types__/ISwitchButton';
import ButtonProto from '../../atoms/button';
import styled, { FlattenSimpleInterpolation } from 'styled-components';

const Button = styled(ButtonProto)<{ styling?: FlattenSimpleInterpolation }>`
  background: none;
  border: none;
  padding: none;
`;

// the purpuse of this component is to change boolean type states passed in props
const SwitchButton: FC<ISwitchButton> = ({ children, setState, styling }) => {

  const handleClick = () => { setState(previousState => !previousState) }

  return (
    <Button onClick={ handleClick } styling={ styling ? styling : undefined }>
      { children }
    </Button>
  )
}

export default SwitchButton;