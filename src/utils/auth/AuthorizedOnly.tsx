import { Navigate, Outlet } from 'react-router-dom';

import routes from 'core/routes/routes';

import { useAuth } from 'modules/auth/hooks';

const AuthorizedOnly = () => {
  const { data } = useAuth();

  if (!data) {
    return <Navigate to={routes.auth} />;
  }

  return <Outlet />;
};

export default AuthorizedOnly;
