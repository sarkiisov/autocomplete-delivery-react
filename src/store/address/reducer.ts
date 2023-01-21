/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressState, AddressItem } from '../../types/store/address';

const initialState: AddressState = {
  fields: {
    city: '',
    settlement: '',
    street: '',
    house: ''
  },
  lastModifiedKey: null
};

export const addressReducer = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressValue: (state: AddressState, action: PayloadAction<AddressItem>) => {
      state.fields[action.payload.field] = action.payload.value;
      state.lastModifiedKey = action.payload.field;
    },
    removeAddressValue: (state: AddressState, action: PayloadAction<string>) => {
      state.fields[action.payload] = '';
    }
  }
});

export const {
  setAddressValue,
  removeAddressValue
} = addressReducer.actions;

export default addressReducer.reducer;
