import React, { useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { SwitchButton, Flag } from './styles';
import Div from '../../atoms/div';
import BritishFlag from '../../../img/languages/Britain.png';
import PolishFlag from '../../../img/languages/Poland.png';
import { ELanguages } from '../../../__types__/ELanguages';

const LanguageSwitcher = () => {

  const { setCurrentLanguage, currentLanguage } = useContext(PrimitivesContext);

  const handleClick = (language: ELanguages) => () => {
    setCurrentLanguage(() => language);
    console.log(currentLanguage);
  }

  return (
    <Div>
      <SwitchButton onClick={ handleClick(ELanguages.ENGLISH) }>
        <Flag src={ BritishFlag } />
      </SwitchButton>
      <SwitchButton onClick={ handleClick(ELanguages.POLISH) }>
        <Flag src={ PolishFlag } />
      </SwitchButton>
    </Div>
  )
}

export default LanguageSwitcher;