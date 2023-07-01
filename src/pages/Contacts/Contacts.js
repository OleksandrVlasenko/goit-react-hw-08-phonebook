import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Filter } from 'components/Filter/Filter';
import { selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import {
  AddContactContainer,
  ContactsContainer,
  Container,
} from './Contacts.styled';

export default function Contacts() {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
      <Container>
        <h1>Phonebook</h1>
        <div>
          <AddContactContainer>
            <h2>Add new contact</h2>
            <ContactForm />
          </AddContactContainer>
          <ContactsContainer>
            <h2>Contacts</h2>
            <Filter />
            {error ? <ErrorMessage /> : <ContactList />}
          </ContactsContainer>
        </div>
      </Container>
  );
}
