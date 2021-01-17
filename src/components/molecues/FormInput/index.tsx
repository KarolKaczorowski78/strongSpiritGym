import React, { FC } from 'react';
import IFormInput from '../../../__types__/IFormInput';
import { Label, Input } from './styles';

const FormInput: FC<IFormInput> = ({ type, name, label, placeholder, reference }) => {
  return (
    <>
      <Label htmlFor={ name }>{ label }</Label>
      <Input 
        name={ name }
        type={ type } 
        placeholder={ placeholder } 
        ref={ reference } 
      />
    </>
  )
}

export default FormInput;