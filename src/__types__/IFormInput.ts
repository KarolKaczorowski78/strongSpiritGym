import { FlattenSimpleInterpolation, StyledComponent } from "styled-components";

export default interface IFormInput {
  name: string,
  label: string,
  type: 'text' | 'number',
  placeholder: string,
  reference: any,
  labelStyling?: FlattenSimpleInterpolation,
  inputStyling?: FlattenSimpleInterpolation,
  Element?: StyledComponent<'input' | 'textarea', any>,
}