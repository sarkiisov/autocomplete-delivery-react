/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressFormState, AddressFormItem } from '../../types/store';

const initialState: AddressFormState = {
  fields: {
    city: '',
    settlement: '',
    street: '',
    house: ''
  },
  lastModifiedKey: null
};

export const addressReducer = createSlice({
  name: 'addressForm',
  initialState,
  reducers: {
    setAddressValue: (state: AddressFormState, action: PayloadAction<AddressFormItem>) => {
      state.fields[action.payload.field] = action.payload.value;
      state.lastModifiedKey = action.payload.field;
    },
    removeAddressValue: (state: AddressFormState, action: PayloadAction<string>) => {
      state.fields[action.payload] = '';
    },
    resetAddressForm: (state: AddressFormState, action: PayloadAction<void>) => {
      state = initialState;
    }
  }
});

export const {
  setAddressValue,
  removeAddressValue,
  resetAddressForm
} = addressReducer.actions;

export default addressReducer.reducer;
