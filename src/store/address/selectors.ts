import { AddressBounds } from '../../types/address';
import { AddressState } from '../../types/store';
import { RootState } from '../configureStore';

export const addressSelectors = {
  getLastModifiedKey: (state: RootState) => state.address.lastModifiedKey,
  getReferenceFiasId: (referenceType?: AddressBounds) => (state: RootState) => (referenceType ? state.address.fields[referenceType] : undefined),
  getProp: (propKey: keyof AddressState) => (state: RootState) => state.address[propKey]
};
