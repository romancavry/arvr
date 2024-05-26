import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ErrorBoundary } from 'core/components';

import { variables } from 'uikit/theme';
import { AlertProvider } from 'uikit/molecules';

import './globals.css';

const Core = () => (
  <React.Fragment>
    <Helmet>
      <body className={variables} />

      <script
        type='module'
        src='https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js'
      />
    </Helmet>

    <ErrorBoundary>
      <AlertProvider />

      <Outlet />
    </ErrorBoundary>
  </React.Fragment>
);

export default Core;
