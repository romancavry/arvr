import * as React from 'react';
import { Helmet } from 'react-helmet';

import { variables } from 'uikit/theme';

import { Wrapper, Text, Actions } from './styled';

interface ErrorPageProps {
  title: string;
  msg: string;
  canUpdatePage?: boolean;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ title, msg, canUpdatePage }) => {
  const onReload = React.useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Wrapper>
      <Text>{title}</Text>

      <Helmet>
        <body className={variables} />
        <title>{title}</title>
      </Helmet>

      <Text>{msg}</Text>

      <Actions>
        {canUpdatePage && (
          <button onClick={onReload} type='button'>
            Обновить страницу
          </button>
        )}
      </Actions>
    </Wrapper>
  );
};

export default ErrorPage;
