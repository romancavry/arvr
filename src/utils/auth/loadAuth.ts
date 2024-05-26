import { api } from 'api/index';
import { store } from 'api/store';

export default async () => {
  const { dispatch, getState } = store;

  const authNotAttempted = api.endpoints.getUser.select()(
    getState(),
  ).isUninitialized;

  if (authNotAttempted) {
    await api.endpoints.getUser.initiate()(dispatch, getState, null);
  }

  return null;
};
