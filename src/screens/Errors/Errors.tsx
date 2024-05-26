import { useRouteError } from 'react-router-dom';

import { Error404 } from './components';

const Errors = () => {
  const error: any = useRouteError();

  // eslint-disable-next-line no-console
  console.error(error);

  let page = <div>Error {error.status}</div>;

  switch (error.status) {
    case 404:
      page = <Error404 />;
      break;
    default:
      break;
  }

  return page;
};

export default Errors;
