import { RootState } from '../configureStore';

export const addressBookSelectors = {
  getAddresses: (state: RootState) => state.addressBook.addresses
};
