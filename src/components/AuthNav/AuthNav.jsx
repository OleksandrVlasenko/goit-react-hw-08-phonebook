import { Container } from 'components/Navigation/Navigation.styled';
import { LinkStyled } from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Container>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Sign In</LinkStyled>
    </Container>
  );
};
