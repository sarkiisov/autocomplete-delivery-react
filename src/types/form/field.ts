import { FC } from 'react';

import { InputProps } from '../../components/Input';
import { SearchInputProps } from '../../components/SearchInput';

export type FiledProps = {
  as: FC<InputProps>;
  name: string;
  props: Pick<InputProps, 'helperText' | 'labelText' | 'placeholderText'>;
} | {
  as: FC<SearchInputProps>;
  name: string;
  props: Pick<SearchInputProps, 'helperText' | 'labelText' | 'referenceType' | 'suggestionType' | 'hasExtendedItem'>;
};
