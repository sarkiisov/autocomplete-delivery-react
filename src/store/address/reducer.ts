import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressState, AddressComponent, AddressKeys } from './../../types/store/address';

const initialState: AddressState = {
  fields: {
    city: '',
    settlement: '',
    street: '',
    house: ''
  },
  lastTypeChanged: null
};

export const addressReducer = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddressValue: (state: AddressState, action: PayloadAction<AddressComponent>) => {
      state.fields[action.payload.field] = action.payload.value;
      state.lastTypeChanged = action.payload.field;
    },
    removeAddressValue: (state: AddressState, action: PayloadAction<AddressKeys>) => {
      state.fields[action.payload] = '';
    }
  }
});

export const {
  setAddressValue,
  removeAddressValue
} = addressReducer.actions;

export default addressReducer.reducer;