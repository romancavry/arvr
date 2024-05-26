import { Link } from 'react-router-dom';

import routes from 'core/routes/routes';

import { useAuth } from 'modules/auth/hooks';

import { Button } from 'uikit/atoms';

import { Wrapper, Text } from './styled';

const Header = () => {
  const { data } = useAuth();
  const user = data!;

  return (
    <Wrapper>
      <Text>Привет, {user.username}</Text>

      <Link to={routes.logout}>
        <Button variant='ghost'>Выйти</Button>
      </Link>
    </Wrapper>
  );
};

export default Header;
