import { AddressBounds } from '../address';

export type AddressItem = {
  field: AddressBounds;
  value: string;
};

export type AddressState = {
  fields: { [key in AddressBounds ]?: string };
  lastModifiedKey: AddressBounds | null;
};
