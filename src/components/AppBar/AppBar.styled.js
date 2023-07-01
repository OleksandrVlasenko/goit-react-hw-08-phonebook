import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 2px solid #05888d;

  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-left: 70px;
  padding-right: 70px;
`;
