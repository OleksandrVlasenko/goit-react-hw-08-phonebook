import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Container, LinkStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Container>
        <LinkStyled to="/">Home</LinkStyled>
        {isLoggedIn && <LinkStyled to="/contacts">Contacts</LinkStyled>}
      </Container>
    </nav>
  );
};
