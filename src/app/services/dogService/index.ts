import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DOGS_API_KEY } from '../../constants';

export const dogService = fetchBaseQuery({
  baseUrl: 'https://api.thedogapi.com/v1',
  prepareHeaders(headers) {
    headers.set('x-api-key', DOGS_API_KEY);
    return headers;
  },
});
