import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import Notiflix from 'notiflix';

import { ButtonContainer, Form } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const nameId = shortid.generate();
const numberId = shortid.generate();

export const ContactForm = ({ idEdit, setIdEdit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (idEdit) {
      const indexOfCurrentId = contacts.findIndex(
        contact => contact.id === idEdit
      );
      setName(contacts[indexOfCurrentId].name);
      setNumber(contacts[indexOfCurrentId].number);
    }
  }, [idEdit, contacts]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleClick = () => {
    setIdEdit(null);
    formReset();
  };

  const equalContacts = () => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    const buttonName = e.currentTarget.elements.button.textContent;

    if (buttonName === 'Edit contact') {
      dispatch(updateContact({ id: idEdit, name, number }));
      setIdEdit(null);
    } else {
      if (equalContacts()) {
        Notiflix.Notify.failure(`${name} already in contacts`);
        return;
      }

      dispatch(addContact({ name, number }));
    }

    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameId}
          value={name}
          required
        />
      </label>
      <label htmlFor={numberId}>
        Number
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberId}
          value={number}
          required
        />
      </label>
      <ButtonContainer>
        <button type="submit" name="button">
          {!idEdit ? 'Add contact' : 'Edit contact'}
        </button>
        {idEdit && (
          <button type="button" onClick={handleClick}>
            Cancel
          </button>
        )}
      </ButtonContainer>
    </Form>
  );
};
