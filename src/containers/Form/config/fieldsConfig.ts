import * as yup from 'yup';

import { FiledProps } from './../../../types/form/field';
import { Input } from './../../../components/Input/Input';
import { SearchBox } from './../../../components/SearchBox/SearchBox';


export const fieldConfig: FiledProps[] = [
  {
    as: Input,
    name: 'email',
    customHandlers: false,
    props: {
      labelText: 'Email'
    }
  },
  {
    as: SearchBox,
    name: 'city',
    customHandlers: true,
    props: {
      labelText: 'Город',
      suggestionType: 'city',
      hasAdditionValue: true
    }
  },
  {
    as: SearchBox,
    name: 'street',
    customHandlers: true,
    props: {
      labelText: 'Улица',
      suggestionType: 'street',
      referenceType: 'city'
    }
  },
  {
    as: SearchBox,
    name: 'house',
    customHandlers: true,
    props: {
      labelText: 'Дом',
      suggestionType: 'house',
      referenceType: 'street'
    }
  }
];

export const validationSchema = yup.object({
  email: yup.string().email().required('Required'),
  city: yup.string().required('Required'),
  street: yup.string().required('Required'),
  house: yup.string().required('Required')
});

export const initialValues = {
  email: '',
  city: '',
  street: '',
  house: ''
};