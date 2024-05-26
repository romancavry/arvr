import * as React from 'react';
import { toast, ToastContainer, Slide } from 'react-toastify';

import { Snackbar } from 'uikit/atoms';

export interface AlertProps {
  id?: string | number;
  title: string;
  msg?: React.ReactNode;
}

const alert = {
  success: (options: AlertProps): void => {
    const { id, title, msg } = options;

    toast(<Snackbar variant='success' title={title} msg={msg} />, {
      toastId: id,
      ...options,
    });
  },
  error: (options: AlertProps): void => {
    const { id, title, msg } = options;

    toast(<Snackbar variant='error' title={title} msg={msg} />, {
      toastId: id,
      ...options,
    });
  },
  update: (id: string | number, options: AlertProps): void => {
    toast.update(id, {
      render: <Snackbar title={options.title} msg={options.msg} />,
      ...options,
    });
  },
  close: (id: string | number): void => {
    toast.dismiss(id);
  },
};

export const AlertProvider: React.FC<Record<string, unknown>> = props => (
  <ToastContainer
    autoClose={5000}
    transition={Slide}
    draggable={false}
    hideProgressBar
    closeOnClick={false}
    position='bottom-right'
    {...props}
  />
);

export default alert;
