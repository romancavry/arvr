import type { ErrorResponse } from 'react-router-dom';

export const ERROR_CODES = {
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
};

export const getError = (err: any) => {
  const { code } = err.data;
  let msg = null;

  switch (code) {
    case ERROR_CODES.INVALID_CREDENTIALS:
      msg = 'Неверные данные для входа.';
      break;
    default:
      console.log(err); // eslint-disable-line
      msg = 'Произошла ошибка, попробуйте позже.';
      break;
  }

  return {
    msg,
  };
};

export const getRenderError = (err: ErrorResponse) => {
  if (err?.status && ![401].includes(err.status)) {
    throw new Response('', { status: err.status });
  }
};
