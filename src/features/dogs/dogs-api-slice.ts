import { createApi } from '@reduxjs/toolkit/query/react';
import { dogService } from '../../app/services/dogService';
interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const dogsApiSlice = createApi({
  reducerPath: 'api',
  baseQuery: dogService,
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});
