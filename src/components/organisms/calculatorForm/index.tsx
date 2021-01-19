import React, { Dispatch, FC, Fragment, SetStateAction, useContext } from 'react';
import { PrimitivesContext } from '../../../contexts/primitivesContext';
import { Form, Submit } from './styles';
import { useForm } from 'react-hook-form';
import FormInput from '../../molecues/FormInput';
import ICalculatorParams from '../../../__types__/ICalculatorParams';
import { calculateCalories } from '../../../universal/calculateCalories';
import Select from '../../atoms/select';
import Option from '../../atoms/option';
import Label from '../../atoms/label';
import ErrorMessage from '../../atoms/error';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { FormElements, Selects } from '../../../websiteTextContent/calculator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CalculatorForm: FC<{ setCaloricDemand: Dispatch<SetStateAction<number | null>> }> = ({ setCaloricDemand }) => {

  const { register, handleSubmit, errors } = useForm();
  const { currentLanguage } = useContext(PrimitivesContext);
  const isEnglish = currentLanguage === 'ENGLISH';

  const onSubmit = (data: ICalculatorParams) => {
    setCaloricDemand(calculateCalories(data));
  }

  return (
    <Form onSubmit={ handleSubmit(onSubmit) }>
      {
        FormElements.map(({ propName, placeholder, error, reference, name }, i) =>
          <Fragment key={ i }>
            <FormInput 
              name={ propName.eng.toLowerCase() }
              placeholder={ placeholder[isEnglish ? 'eng' : 'pl'] }
              label={ propName[isEnglish ? 'eng' : 'pl'] }
              reference={ register(reference) }
              type="number"
            />
            { errors[name] && <ErrorMessage>{ error[isEnglish ? 'eng' : 'pl'] }</ErrorMessage> }
          </Fragment>
        )
      }
      {
        Selects.map((select, i) => 
          <Fragment key={ i }>
            <Label htmlFor={ select.name }>{ select.label[isEnglish ? 'eng' : 'pl'] }</Label>
            <Select ref={ register } name={ select.name }>
              { select.options.map(({ value, eng, pl }, i2) => 
                <Option key={ i2 } value={ value }>{ isEnglish ? eng : pl }</Option>) }
            </Select>  
          </Fragment>
        )
      }
      <Submit type="submit">
        { isEnglish ? 'Calculate' : 'Oblicz' }!&nbsp;
        <FontAwesomeIcon icon={ faCalculator } />
      </Submit>
    </Form>
  )
}

export default CalculatorForm;