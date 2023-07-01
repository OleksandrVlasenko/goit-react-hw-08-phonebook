import { Container } from './Home.styled';
import { useAuth } from 'hooks/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();
  
  return (
    <Container>
      <h1>Phonebook</h1>
      {!isLoggedIn && (
        <p>In order to use the application, you need to log in</p>
      )}
    </Container>
  );
}
