import { AddressBounds, AddressBoundsPriority } from '../../types/address';

export const parseAddressItem = (addressItem: any, suggestionType: AddressBounds) => {
  const fiasId = addressItem.data[`${suggestionType}_fias_id`] as string;
  const mainAddress = addressItem.data[`${suggestionType}_with_type`] as string || addressItem.value.split(',').at(-1) as string;
  const extendedAddress = `${addressItem.data.region_with_type}, ${addressItem.data.country}`;

  return {
    fiasId,
    mainAddress,
    extendedAddress
  };
};

export const compareBoundPriorities = (key1: AddressBounds, key2: AddressBounds) => {
  const boundsPriorityArray = Object.keys(AddressBoundsPriority);
  if (boundsPriorityArray.indexOf[key1] < boundsPriorityArray.indexOf[key2]) return -1;
  if (boundsPriorityArray.indexOf[key1] > boundsPriorityArray.indexOf[key2]) return 1;
  return 0;
};
