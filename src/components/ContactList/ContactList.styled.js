import styled from '@emotion/styled';

export const Contacts = styled.div`
  height: 450px;
  overflow-y: scroll;

  padding: 20px;
  width: 400px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const InfoMessage = styled.p`
  font-weight: 700;
`;
