import type { ErrorResponse, RouteProps } from 'react-router-dom';

import { api } from 'api/index';
import { store } from 'api/store';

import router from 'core/routes/routeConfig';
import routes from 'core/routes/routes';

import { getRenderError } from 'utils/errorUtils';

export default {
  loader: async () => {
    try {
      const { dispatch, getState } = store;

      await api.endpoints.logout.initiate()(dispatch, getState, null).unwrap();

      return router.navigate(routes.home);
    } catch (error) {
      getRenderError(error as ErrorResponse);

      return null;
    }
  },
} as RouteProps;
