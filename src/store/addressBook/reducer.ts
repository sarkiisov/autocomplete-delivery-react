/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressBookState, AddressBookItem } from '../../types/store';

const initialState: AddressBookState = {
  addresses: [] as AddressBookItem[]
};

export const addressReducer = createSlice({
  name: 'addressBook',
  initialState,
  reducers: {
    addBookItem: (state: AddressBookState, action: PayloadAction<AddressBookItem>) => {
      const bookItem = action.payload;
      bookItem.bookNumber = state.addresses.length + 1;
      state.addresses.push(bookItem);
    },
    removeBookItem: (state: AddressBookState, action: PayloadAction<string>) => {
      state.addresses = state.addresses.filter((item) => item.id !== action.payload);
    }
  }
});

export const {
  addBookItem,
  removeBookItem
} = addressReducer.actions;

export default addressReducer.reducer;
