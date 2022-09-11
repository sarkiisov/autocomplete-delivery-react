export type AddressKeys = 'city' | 'settlement' | 'street' | 'house';

export type AddressComponent = {
  field: AddressKeys;
  value: string;
}

export type AddressState = {
  fields: Record<AddressKeys, string>;
  lastTypeChanged: AddressKeys | null;
}