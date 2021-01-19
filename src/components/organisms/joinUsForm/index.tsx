import React, { Fragment, useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { LocationContext } from '../../../contexts/locationContext';
import { Form, Submit } from './styles';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../../websiteTextContent/JoinUs';
import FormInput from '../../molecues/FormInput';
import { faFistRaised }  from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LocationSwitcher from '../locationSwitcher';
import Label from '../../atoms/label';
import { individualProgramSports, EIndividualProgramSports } from '../../../__types__/EIndividualProgramSports';
import Select from '../../atoms/select';
import Option from '../../atoms/option';
import IJoinUsFormData from '../../../__types__/IJoinUsFormData';
import ErrorMessage from '../../atoms/error';

const JoinUsForm = () => {

  const { register, errors, handleSubmit } = useForm();
  const { currentLanguage } = useContext(PrimitivesContext);
  const { gymId } = useContext(LocationContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  const onSubmit = (data: IJoinUsFormData) => {
    const reqBody = {
      ...data,
      'gymId': gymId,
    }
    console.log(reqBody);
  }

  return (
    <Form onSubmit={ handleSubmit(onSubmit) }>
      {
        Inputs.map(({ error, name, placeholder, propName, reference, Element,  }, i) => 
          <Fragment key={ i }>
            <FormInput 
              name={ name }
              placeholder={ placeholder[isEnglish ? 'eng' : 'pl'] }
              label={ propName[isEnglish ? 'eng' : 'pl'] }
              reference={ register(reference) }
              Element={ Element }
              type="text"
            />
            { errors[name] && <ErrorMessage>{ error[isEnglish ? 'eng' : 'pl'] }</ErrorMessage> }
          </Fragment>
        )
      }
      <Label htmlFor="gym">{ isEnglish ? 'Location' : 'Lokalizacja' }</Label>
      <LocationSwitcher  />
      <Label htmlFor="specialization">{ isEnglish ? 'Specialization' : 'Specializacja' }</Label>
      <Select name="specialization" ref={ register }>
        { individualProgramSports.map(({ eng, pl }, i) => 
          <Option value={ Object.values(EIndividualProgramSports)[i] } key={ i }>
            { isEnglish ? eng : pl }
          </Option>) 
        }
      </Select>
      <Submit type="submit">
        { isEnglish ? 'Send' : 'Wyslij' }&nbsp;&nbsp;
        <FontAwesomeIcon icon={ faFistRaised } />
      </Submit>
    </Form>
  )
}

export default JoinUsForm;