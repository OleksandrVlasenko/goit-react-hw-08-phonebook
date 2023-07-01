import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/Navigation/Navigation.styled';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      <p>Welcome, {user.name}</p>
      <Button
        variant="outlined"
        onClick={() => dispatch(logOut())}
        sx={{ color: '#05888d', border: '1px solid #05888d7f', textTransform: "none" }}
      >
        Logout
      </Button>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button> */}
    </Container>
  );
};
