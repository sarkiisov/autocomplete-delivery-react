import { FC } from 'react';

import { InputProps } from './../../components/Input/Input';
import { SearchBoxProps } from './../../components/SearchBox/SearchBox';

export type FiledProps = {
  as: FC<InputProps>;
  name: string;
  customHandlers: false;
  props: Pick<InputProps, 'helperText' | 'labelText' | 'placeholderText'>;
} | {
  as: FC<SearchBoxProps>;
  name: string;
  customHandlers: true;
  props: Pick<SearchBoxProps, 'hasAdditionValue' | 'helperText' | 'labelText' | 'referenceType' | 'suggestionType'>;
}

