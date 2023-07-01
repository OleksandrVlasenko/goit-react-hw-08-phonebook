import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { ContactItem, ContactName } from './Contact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoadingContacts } from 'redux/contacts/selectors';
import { IconButton } from '@mui/material';

export const Contact = ({ name, number, id }) => {
  // const [idOfDeletingContact, setIdOfDeletingContact] = useState(null);
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectIsLoadingContacts);

  const handleDeleteContact = () => {
    if (isLoadingContacts) {
      return;
    }
    dispatch(deleteContact(id));
    // setIdOfDeletingContact(id);
  };

  return (
    <ContactItem>
      <div>
        <ContactName>{name}:</ContactName>
        <p>{number}</p>
      </div>

      <IconButton aria-label="delete" onClick={handleDeleteContact} sx={{border: "2px solid transparent",}}>
        <DeleteIcon />
      </IconButton>
    </ContactItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
