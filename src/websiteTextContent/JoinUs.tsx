import Styled from 'styled-components';
import IFormInputData from '../__types__/IFormInputData';

export const Inputs: IFormInputData[] = [
  {
    error: {
      eng: 'This field is required',
      pl: 'To pole jest wymagane',
    },
    name: 'first_name',
    placeholder: {
      eng: '',
      pl: '',
    },
    propName: {
      eng: 'First name',
      pl: 'Imie',
    },
    reference: { required: true },
  },
  {
    error: {
      eng: 'This field is required',
      pl: 'To pole jest wymagane',
    },
    name: 'last_name',
    placeholder: {
      eng: '',
      pl: '',
    },
    propName: {
      eng: 'Last name',
      pl: 'Nazwisko',
    },
    reference: { required: true, },
  },
  {
    error: {
      eng: 'This field is required',
      pl: 'To pole jest wymagane',
    },
    name: 'about_experience',
    placeholder: {
      eng: '',
      pl: '',
    },
    propName: {
      eng: 'Experience',
      pl: 'Doswiadczenie',
    },
    reference: { required: true, },
    Element: Styled.textarea``,
  },
  {
    error: {
      eng: 'This field is required',
      pl: 'To pole jest wymagane',
    },
    name: 'about',
    placeholder: {
      eng: '',
      pl: '',
    },
    propName: {
      eng: 'Something about You',
      pl: 'Cos o Tobie',
    },
    reference: { required: true, },
    Element: Styled.textarea``,
  },
]