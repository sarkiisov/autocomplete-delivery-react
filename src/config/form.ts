import * as yup from 'yup';

import { FiledProps } from '../types/form';
import { Input } from '../components/Input';
import { SearchInput } from '../components/SearchInput';

export const fieldConfig: FiledProps[] = [
  {
    as: Input,
    name: 'email',
    props: {
      labelText: 'Email'
    }
  },
  {
    as: SearchInput,
    name: 'city',
    props: {
      labelText: 'Город',
      suggestionType: 'city',
      hasExtendedItem: true
    }
  },
  {
    as: SearchInput,
    name: 'street',
    props: {
      labelText: 'Улица',
      suggestionType: 'street',
      referenceType: 'city'
    }
  },
  {
    as: SearchInput,
    name: 'house',
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
