import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const LinkStyled = styled(NavLink)`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  padding: 5px;
  text-decoration: none;
  color: #000000;

  &.active {
    color: #05888d;
  }
`;
