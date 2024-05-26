import * as React from 'react';

import { ErrorPage } from 'screens/Errors/components';

const Error404: React.FC = () => (
  <ErrorPage title='Ошибка 404' msg='Страница не найдена' canUpdatePage />
);

export default Error404;
