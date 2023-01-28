/* eslint-disable arrow-body-style */

import { AddressBounds } from '../types/address';

export const getAddressSuggestions = (searchQuery: string, fromBound: AddressBounds, toBound: AddressBounds, locationType: AddressBounds = 'area', fiasId?: string) => {
  return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${process.env.REACT_APP_DADATA_API_KEY}`
    },
    body: JSON.stringify({
      ...(fiasId && {
        'locations': {
          [`${locationType}_fias_id`]: fiasId
        }
      }),
      'query': searchQuery,
      'from_bound': { value: fromBound },
      'to_bound': { value: toBound }
    })
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok');
  }).then(({ suggestions }) => {
    if (fiasId) {
      return suggestions.filter((addressItem) => addressItem.data[`${locationType}_fias_id`]);
    }
    return suggestions;
  });
};
