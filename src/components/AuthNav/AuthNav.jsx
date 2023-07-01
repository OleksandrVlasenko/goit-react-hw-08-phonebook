import { Container } from 'components/Navigation/Navigation.styled';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Container>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Container>
  );
};
