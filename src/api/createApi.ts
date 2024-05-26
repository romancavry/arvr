import { createApi as createRtkApi } from '@reduxjs/toolkit/query/react';

import { customBaseQuery } from './customBaseQuery';
import { TAG_TYPES } from './constants';

import type { ApiOptions } from './types';

export const createApi = (options: ApiOptions) => {
  const { reducerPath } = options;

  return createRtkApi({
    reducerPath,
    baseQuery: customBaseQuery(),
    tagTypes: Object.values(TAG_TYPES),
    endpoints: () => ({}),
  });
};

export type Api = ReturnType<typeof createApi>;
