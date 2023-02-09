import { AddressBounds } from '../../types/address';
import { AddressFormState } from '../../types/store';
import { RootState } from '../configureStore';

export const addressFormSelectors = {
  getLastModifiedKey: (state: RootState) => state.addressForm.lastModifiedKey,
  getReferenceFiasId: (referenceType?: AddressBounds) => (state: RootState) => (referenceType ? state.addressForm.fields[referenceType] : undefined),
  getProp: (propKey: keyof AddressFormState) => (state: RootState) => state.addressForm[propKey]
};
