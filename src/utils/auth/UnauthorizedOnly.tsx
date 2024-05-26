import { Navigate, Outlet } from 'react-router-dom';

import routes from 'core/routes/routes';

import { useAuth } from 'modules/auth/hooks';

const UnauthorizedOnly = () => {
  const { data } = useAuth();

  if (data) {
    return <Navigate to={routes.my} />;
  }

  return <Outlet />;
};

export default UnauthorizedOnly;
