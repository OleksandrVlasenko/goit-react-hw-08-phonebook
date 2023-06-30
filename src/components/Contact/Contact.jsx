import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ContactItem, ContactName, DeleteButton } from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export const Contact = ({ name, number, id }) => {
  const [idOfDeletingContact, setIdOfDeletingContact] = useState(null);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = () => {
    if (isLoading) {
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
        {isLoading && idOfDeletingContact === id ? 'Deleting' : 'Delete'}
      </DeleteButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
