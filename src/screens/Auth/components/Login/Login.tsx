import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form as FinalForm, Field } from 'react-final-form';

import { api } from 'api/index';

import routes from 'core/routes/routes';

import type { AuthValues } from 'modules/auth';

import { Button } from 'uikit/atoms';
import { alert } from 'uikit/molecules';

import { Input } from 'components/Form';

import { getError } from 'utils/errorUtils';

import validation from '../../validation';
import {
  Title,
  TypeWrapper as Wrapper,
  Text,
  Inputs,
  submitButtonStyle,
} from '../../styled';

interface LoginProps {
  onRegisterPush: () => void;
}

const Login: React.FC<LoginProps> = ({ onRegisterPush }) => {
  const navigate = useNavigate();

  const [login, { isLoading }] = api.useLoginMutation();

  const onLogin = React.useCallback(
    async (values: AuthValues) => {
      try {
        const { username, password } = values;

        await login({ username, password }).unwrap();

        alert.success({
          title: 'Вы успешно вошли!',
        });

        navigate(routes.my);
      } catch (err) {
        const error = getError(err);

        alert.error({
          title: error.msg,
        });
      }
    },
    [login, navigate],
  );

  return (
    <FinalForm
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={onLogin}
      validate={validation()}
      render={({ handleSubmit, valid }) => (
        <Wrapper>
          <Title>Вход</Title>

          <Inputs>
            <Field
              name='username'
              component={Input}
              placeholder='Имя пользователя'
            />

            <Field
              name='password'
              component={Input}
              type='password'
              placeholder='Пароль'
            />
          </Inputs>

          <Button
            onClick={handleSubmit}
            className={submitButtonStyle}
            loading={isLoading}
            disabled={!valid}
          >
            Войти
          </Button>

          <Text>
            Нет аккаунта?{' '}
            <Button type='button' variant='ghost' onClick={onRegisterPush}>
              Регистрация
            </Button>
          </Text>
        </Wrapper>
      )}
    />
  );
};

export default Login;
