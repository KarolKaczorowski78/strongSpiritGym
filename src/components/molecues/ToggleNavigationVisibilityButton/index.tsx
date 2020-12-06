import React, { useContext } from 'react';
import { BooleansContext } from '../../../contexts/booleansContext';
import SwitchButton from '../SwitchButton';
import { ButtonStyle, Hamburger } from './styles';

const ToggleNavigationVisibilityButton = () => {

  const { navigationLinksVisibility ,setNavigationLinksVisibility } = useContext(BooleansContext);

  return (
    <SwitchButton setState={ setNavigationLinksVisibility } styling={ ButtonStyle }>
      <Hamburger navLinksVisible={ navigationLinksVisibility } />
    </SwitchButton>
  )
}

export default ToggleNavigationVisibilityButton;