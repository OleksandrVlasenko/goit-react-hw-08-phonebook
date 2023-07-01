import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ContactItem, ContactName, DeleteButton } from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoadingContacts } from 'redux/contacts/selectors';

export const Contact = ({ name, number, id }) => {
  const [idOfDeletingContact, setIdOfDeletingContact] = useState(null);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectIsLoadingContacts);

  const handleDeleteContact = () => {
    if (isLoadingContacts) {
      return;
    }
    dispatch(deleteContact(id));
    setIdOfDeletingContact(id);
  };

  return (
    <ContactItem>
      <ContactName>{name}:</ContactName>
      <p>{number}</p>
      <DeleteButton type="button" onClick={handleDeleteContact}>
        {isLoadingContacts && idOfDeletingContact === id ? 'Deleting' : 'Delete'}
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
