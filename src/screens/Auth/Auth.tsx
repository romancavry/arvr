import * as React from 'react';

import { Login, Register } from './components';
import { Wrapper } from './styled';

const Auth = () => {
  const [type, setType] = React.useState<'login' | 'register'>('login');

  const onLoginPush = () => {
    setType('login');
  };

  const onRegisterPush = () => {
    setType('register');
  };

  return (
    <Wrapper>
      {type === 'login' && <Login onRegisterPush={onRegisterPush} />}
      {type === 'register' && <Register onLoginPush={onLoginPush} />}
    </Wrapper>
  );
};

export default Auth;
