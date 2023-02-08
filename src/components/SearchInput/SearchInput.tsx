import React, { useEffect } from 'react';
import clsx from 'clsx';
import hash from 'object-hash';

import { useQuery } from 'react-query';
import { useFormikContext } from 'formik';

import { SearchLogo, LoaderLogo } from '../../theme/icons/components';
import { useDebounce } from '../../hooks';
import { getAddressSuggestions } from '../../api';
import { setAddressValue, removeAddressValue } from '../../store/addressForm/reducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addressFormSelectors } from '../../store/addressForm/selectors';
import { AddressBounds } from '../../types/address';
import { parseAddressItem, compareBoundsPriorities } from './SearchInput.helpers';
import { setNotification } from '../../utils';

import useStyles from './SearchInput.styles';

export interface SearchInputProps {
  className?: string;
  value: string;
  name: string;
  labelText: string;
  suggestionType: AddressBounds;
  referenceType?: AddressBounds;
  hasExtendedItem?: boolean;
  helperText?: string;
  error?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  className,
  value,
  name,
  labelText,
  suggestionType,
  referenceType,
  hasExtendedItem,
  helperText,
  error
}) => {
  const classes = useStyles({ error, hasExtendedItem });

  const { setFieldValue, setFieldTouched } = useFormikContext();

  const dispatch = useAppDispatch();
  const referenceFiasId = useAppSelector(addressFormSelectors.getReferenceFiasId(referenceType));
  const lastModifiedKey = useAppSelector(addressFormSelectors.getLastModifiedKey);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['addresses', value, suggestionType, referenceType, referenceFiasId],
    queryFn: () => getAddressSuggestions(value, suggestionType, referenceType, referenceFiasId),
    onError: () => setNotification({ type: 'error', message: 'Ошибка при вызове API' }),
    enabled: false,
    retry: false,
  });

  const fetchAddressSuggestions = useDebounce(() => {
    if (!value) return;
    refetch();
  }, 1000);

  const handleInputBlur = () => {
    setFieldTouched(name, true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(removeAddressValue(suggestionType));
    setFieldValue(name, event.target.value);
  };

  const handleSelectAddress = (fiasId: string, addressValue: string) => {
    dispatch(setAddressValue({ field: suggestionType, value: fiasId }));
    setFieldValue(name, addressValue);
  };

  const clearDependentInputs = () => {
    if (!lastModifiedKey) return;
    if (compareBoundsPriorities(lastModifiedKey, suggestionType) === -1) {
      dispatch(removeAddressValue(suggestionType));
      setFieldValue(name, '');
    }
  };

  useEffect(fetchAddressSuggestions, [value]);
  useEffect(clearDependentInputs, [lastModifiedKey]);

  return (
    <div className={clsx(classes.root, className)}>
      <span className={classes.labelText}>{labelText}</span>
      <div className={classes.autocompleteWrapper}>
        <div className={classes.inputWrapper}>
          <input
            className={classes.input}
            value={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            autoComplete="off"
            spellCheck="false"
          />
          <div className={classes.adornmentBlock}>
            { isLoading
              ? <LoaderLogo width="24" height="24" />
              : <SearchLogo width="24" height="24" />}
          </div>
        </div>
        <div className={classes.autocompleteList}>
          {data
            ? data.map((addressItem) => {
              const { fiasId, mainAddress, extendedAddress } = parseAddressItem(addressItem, suggestionType);
              const itemKey = hash(addressItem);

              return (
                <div key={itemKey} className={classes.listItem} onMouseDown={() => handleSelectAddress(fiasId, mainAddress)}>
                  <span className={classes.mainAddress}>{mainAddress}</span>
                  { hasExtendedItem && <span className={classes.additionAddress}>{extendedAddress}</span> }
                </div>
              );
            })
            : (
              <div className={classes.notFoundListItem}>
                <span>По вашему запросу ничего не найдено</span>
              </div>
            )}
        </div>
      </div>
      <span className={classes.helperText}>{helperText}</span>
    </div>
  );
};
