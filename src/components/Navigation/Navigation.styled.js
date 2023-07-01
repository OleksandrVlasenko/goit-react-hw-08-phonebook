import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 20px;
`;
export const LinkStyled = styled(NavLink)`
  padding: 5px;
  background-color: #fff;
  text-decoration: none;
  color: #010122;
  border-radius: 4px;
  border: 1px solid 0550d9;

  &.active {
    color: #0404ff;
  }
`;
