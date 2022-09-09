import { FromBound, ToBound } from '../types/api';

export async function getAddressSuggestions(query: string, fromBound: FromBound, toBound: ToBound) {
  return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Token ${process.env.REACT_APP_DADATA_API_KEY}`
    },
    body: JSON.stringify({
      'query': query,
      'from_bound': { value: fromBound },
      'to_bound': { value: toBound }
    })
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('An error occurred executing the API call');
  });
}