import * as React from 'react';

import { ErrorPage } from 'screens/Errors/components';

const ClientError: React.FC = () => (
  <ErrorPage
    title='Ошибка интерфейса'
    msg='Произошла непредвиденная ошибка'
    canUpdatePage
  />
);

export default ClientError;
