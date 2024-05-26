import * as React from 'react';
import { Form as FinalForm, Field } from 'react-final-form';

import { api } from 'api/index';
import type { AuthValues } from 'modules/auth';

import { Button } from 'uikit/atoms';
import { alert } from 'uikit/molecules';

import { Input } from 'components/Form';

import validation from '../../validation';
import {
  Title,
  TypeWrapper as Wrapper,
  Text,
  Inputs,
  submitButtonStyle,
} from '../../styled';

interface RegisterProps {
  onLoginPush: () => void;
}

const Register: React.FC<RegisterProps> = ({ onLoginPush }) => {
  const [register, { isLoading }] = api.useRegisterMutation();

  const onRegister = React.useCallback(
    async (values: AuthValues) => {
      try {
        const { username, password } = values;

        await register({ username, password }).unwrap();

        alert.success({
          title: 'Вы успешно зарегистрировались',
        });
      } catch (err) {
        // @ts-ignore
        const { errors } = err.data;

        errors.forEach((error: any) => {
          alert.error({
            title: error.message,
          });
        });
      }
    },
    [register],
  );

  return (
    <FinalForm
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={onRegister}
      validate={validation()}
      render={({ handleSubmit, valid }) => (
        <Wrapper>
          <Title>Регистрация</Title>

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
            Зарегистрироваться
          </Button>

          <Text>
            Уже есть аккаунт?{' '}
            <Button type='button' variant='ghost' onClick={onLoginPush}>
              Войти
            </Button>
          </Text>
        </Wrapper>
      )}
    />
  );
};

export default Register;
