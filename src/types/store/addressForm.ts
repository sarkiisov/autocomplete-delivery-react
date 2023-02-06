import { AddressBounds } from '../address';

export type AddressFormItem = {
  field: AddressBounds;
  value: string;
};

export type AddressFormState = {
  fields: { [key in AddressBounds ]?: string };
  lastModifiedKey: AddressBounds | null;
};
