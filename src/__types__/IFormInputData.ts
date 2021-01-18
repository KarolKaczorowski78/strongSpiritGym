import IContent from './IContent';
import { StyledComponent } from 'styled-components';
import { RegisterOptions }  from 'react-hook-form';

export default interface IFormInputData {
  name: string,
  propName: IContent,
  placeholder: IContent,
  error: IContent,
  reference: RegisterOptions,
  Element?: StyledComponent<'input' | 'textarea', any>,
}