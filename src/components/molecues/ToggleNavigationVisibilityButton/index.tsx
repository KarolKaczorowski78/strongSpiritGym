import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import SwitchButton from '../SwitchButton';
import { ButtonStyle, Hamburger } from './styles';

const ToggleNavigationVisibilityButton = () => {

  const { navigationLinksVisibility ,setNavigationLinksVisibility } = useContext(PrimitivesContext);

  return (
    <SwitchButton setState={ setNavigationLinksVisibility } styling={ ButtonStyle }>
      <Hamburger navLinksVisible={ navigationLinksVisibility } />
    </SwitchButton>
  )
}

export default ToggleNavigationVisibilityButton;