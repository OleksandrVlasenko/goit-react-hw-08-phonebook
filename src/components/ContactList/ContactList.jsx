import React from 'react';
import { Contact } from 'components/Contact/Contact';

import { Contacts, InfoMessage } from './ContactList.styled';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const ContactList = ({ setIdEdit }) => {
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Contacts>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            setIdEdit={setIdEdit}
          />
        ))}
      </ul>

      {isLoggedIn && contacts.length === 0 && !isRefreshing ? (
        <InfoMessage>The list of contacts is empty</InfoMessage>
      ) : (
        filteredContacts.length === 0 &&
        !isLoadingContacts && <InfoMessage>Nothing found</InfoMessage>
      )}
    </Contacts>
  );
};
