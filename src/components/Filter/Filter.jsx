import React from 'react';
import shortid from 'shortid';

import { FilterField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const filterId = shortid.generate();

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <FilterField>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        id={filterId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        value={filter}
      />
    </FilterField>
  );
};
