import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Core } from 'core/components';

import Auth from 'screens/Auth';
import Errors from 'screens/Errors/Errors';
import Home from 'screens/Home';
import My from 'screens/My';
import Logout from 'screens/Logout';

import { AuthorizedOnly, loadAuth, UnauthorizedOnly } from 'utils/auth';

import routes from './routes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Core />} errorElement={<Errors />} loader={loadAuth}>
      <Route path={routes.home} {...Home} />

      <Route Component={UnauthorizedOnly}>
        <Route path={routes.auth} {...Auth} />
      </Route>

      <Route Component={AuthorizedOnly}>
        <Route path={routes.logout} {...Logout} />

        <Route path={routes.my} {...My} />
      </Route>
    </Route>,
  ),
);

export default router;
