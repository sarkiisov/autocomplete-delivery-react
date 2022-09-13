import React, { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import { useDebounce, useOutsideClick } from '../../hooks';
import { getAddressSuggestions } from '../../api';

import { InputStatus } from '../../types/form';
import { AddressKeys } from '../../types/store';
import { BoundNames, BoundsPriorities, ToBound } from '../../types/api';
import { IconsHelper } from './SearchBox.helpers';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore';
import { setAddressValue, removeAddressValue } from '../../store/address/reducer';

import useStyles from './SearchBox.styles';

export interface SearchBoxProps {
  labelText: string;
  suggestionType: BoundNames;
  onChange: (value: string) => void;
  onBlur: () => void;
  referenceType?: AddressKeys;
  hasAdditionValue?: boolean;
  helperText?: string;
  error?: boolean;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  labelText,
  suggestionType,
  onChange: setChangedValue,
  onBlur: setFieldBlured,
  referenceType,
  hasAdditionValue,
  helperText,
  error
}) => {
  const classes = useStyles({ error, hasAdditionValue });

  const dispatch = useDispatch();
  const referenceFiasId = useSelector((state: RootState) => state.address.fields[referenceType as AddressKeys] || '');
  const lastSearchBoxChanged = useSelector((state: RootState) => state.address.lastTypeChanged);

  const [searchBoxValue, setSearchBoxValue] = useState<string>('');
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [isSearchBoxOpened, setIsSearchBoxOpened] = useState<boolean>(false);
  const [inputStatus, setInputStatus] = useState<InputStatus>('INITIAL');

  const inputRef = useRef<HTMLInputElement>(null);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const suggestionListRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    dispatch(removeAddressValue(suggestionType as AddressKeys));
    setChangedValue('');
    setSearchBoxValue(value);
  };

  const setFocusOnInput = () => {
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsSearchBoxOpened(true);
  };

  const handleBlur = () => {
    setFieldBlured();
  };

  useOutsideClick(inputWrapperRef, () => {
    setIsSearchBoxOpened(false);
  }, [suggestionListRef]);

  const handleSelectAddress = (fiasId: string, addressValue: string) => {
    dispatch(setAddressValue({
      field: suggestionType as AddressKeys,
      value: fiasId
    }));
    setChangedValue(addressValue);
    setSearchBoxValue(addressValue);
    setIsSearchBoxOpened(false);
  };

  const fetchAddressSuggestion = useDebounce(async () => {
    if (!searchBoxValue) {
      setAddressSuggestions([]);
      return;
    }
    setInputStatus('FETCHING');
    const addresses = await getAddressSuggestions(searchBoxValue, suggestionType, suggestionType as ToBound, referenceType, referenceFiasId);
    setAddressSuggestions(addresses.suggestions.filter((addressItem: any) => addressItem.data[`${suggestionType}_fias_id`]));
    setInputStatus('INITIAL');
  }, 1000);

  useEffect(fetchAddressSuggestion, [searchBoxValue]);

  useEffect(() => {
    if (lastSearchBoxChanged === null) {
      return;
    }
    if (BoundsPriorities.indexOf(lastSearchBoxChanged) < BoundsPriorities.indexOf(suggestionType)) {
      dispatch(removeAddressValue(suggestionType as AddressKeys));
      setChangedValue('');
      setSearchBoxValue('');
    }
  }, [lastSearchBoxChanged]);

  return (
    <div className={classes.root}>
      <p className={classes.labelText}>{labelText}</p>
      <div className={classes.autocompleteWrapper}>
        <div className={classes.inputWrapper} onClick={setFocusOnInput} ref={inputWrapperRef}>
          <input className={classes.input} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} value={searchBoxValue} ref={inputRef} autoComplete="off"/>
          <div className={classes.adornmentBlock}>
            {IconsHelper[inputStatus]}
          </div>
        </div>
        {isSearchBoxOpened &&
          <div className={classes.autocompleteList} ref={suggestionListRef}>
            {(addressSuggestions.length !== 0)
              ?
              addressSuggestions.map((addressItem: any) => {
                const fiasId = addressItem.data[`${suggestionType}_fias_id`];
                const mainAddress = addressItem.data[`${suggestionType}_with_type`] || addressItem.value.split(',').at(-1);
                const additionAddress = `${addressItem.data['region_with_type']}, ${addressItem.data['country']}`;

                return (
                  <div className={classes.listItem} key={fiasId} onClick={() => handleSelectAddress(fiasId, mainAddress)}>
                    <p className={classes.mainAddress}>{mainAddress}</p>
                    { hasAdditionValue && <p className={classes.additionAddress}>{additionAddress}</p> }
                  </div>
                );
              })
              :
              <div className={classes.notFoundListItem}>
                <p>По вашему запросу ничего не найдено</p>
              </div>
            }
          </div>
        }
      </div>
      <p className={classes.helperText}>{helperText}</p>
    </div>
  );
};