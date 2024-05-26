import { api } from 'api/index';
import type { BaseApi, ApiOptions, Builder } from 'api/types';

import type { AuthValues } from 'modules/auth/types';

import type { User } from './types';

export const getAuthEndpoints = (
  builder: Builder,
  // eslint-disable-next-line no-unused-vars
  _options: ApiOptions,
  // eslint-disable-next-line no-unused-vars
  _api: BaseApi,
) => ({
  register: builder.mutation<void, AuthValues>({
    query: data => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/register',
      method: 'POST',
      data,
    }),
  }),

  login: builder.mutation<void, AuthValues>({
    query: data => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/login',
      method: 'POST',
      data,
    }),
    onQueryStarted(_, { dispatch, queryFulfilled }) {
      queryFulfilled.then(({ data }) => {
        // Update current user
        dispatch(
          api.util.upsertQueryData(
            'getUser',
            undefined,
            data as unknown as User,
          ),
        );
      });
    },
  }),

  logout: builder.query<void, void>({
    query: () => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/logout',
      method: 'GET',
    }),
    onQueryStarted(_, { dispatch, queryFulfilled }) {
      queryFulfilled.then(() => {
        // Remove current user
        dispatch(
          api.util.upsertQueryData(
            'getUser',
            undefined,
            null as unknown as User,
          ),
        );
      });
    },
  }),

  getUser: builder.query<User, void>({
    query: () => ({
      host: 'http://127.0.0.1:1337',
      path: '/auth/user',
      method: 'GET',
    }),
  }),
});
