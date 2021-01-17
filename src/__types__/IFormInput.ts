import { FlattenSimpleInterpolation } from "styled-components";

export default interface IFormInput {
  name: string,
  label: string,
  type: 'text' | 'number',
  placeholder: string,
  reference: any,
  labelStyling?: FlattenSimpleInterpolation,
  inputStyling?: FlattenSimpleInterpolation,
}