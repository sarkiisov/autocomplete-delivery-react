export enum AddressBoundsPriority {
  COUNTRY = 'country',
  REGION = 'region',
  AREA = 'area',
  CITY = 'city',
  SETTLEMENT = 'settlement',
  STREET = 'street',
  HOUSE = 'house',
  FLAT = 'flat'
}

export type AddressBounds = `${AddressBoundsPriority}`;
