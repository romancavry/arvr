import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { store } from 'api/store';

import routeConfig from 'core/routes/routeConfig';

const Root = () => (
  <Provider store={store}>
    <RouterProvider router={routeConfig} />
  </Provider>
);

export default Root;
