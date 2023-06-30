import React from 'react';
import { Contact } from 'components/Contact/Contact';

import { Contacts, InfoMessage } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);

  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);

  return (
    <Contacts>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
      {contacts.length === 0 && !isLoading ? (
        <InfoMessage>The list of contacts is empty</InfoMessage>
      ) : (
        filteredContacts.length === 0 &&
        !isLoading && <InfoMessage>Nothing found</InfoMessage>
      )}
    </Contacts>
  );
};
