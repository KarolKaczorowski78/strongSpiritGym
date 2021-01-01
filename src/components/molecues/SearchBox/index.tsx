import React, { ChangeEvent, FC } from 'react';
import { Input, Container } from './styles';
import ISearchBox from '../../../__types__/ISearchBox';

const SearchBox: FC<ISearchBox> = ({ placeholder, setState, state }) => {
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(() => e.target.value);
  }
  
  return (
    <Container>
      <Input 
        type="text" 
        value={ state } 
        onChange={ handleChange } 
        placeholder={ placeholder }  
      />
    </Container>
  )
}

export default SearchBox;