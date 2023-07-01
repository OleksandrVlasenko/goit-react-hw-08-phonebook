import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './operations';

const handlePending = state => {
  state.isLoadingContacts = true;
};

const handleFulfilled = state => {
  state.isLoadingContacts = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoadingContacts = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoadingContacts: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected);

    builder
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected);

    builder
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log('action:', action.payload);
        handleFulfilled(state);
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        console.log('index:', index);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);

    builder
      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(updateContact.rejected, handleRejected);
  },
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     handleFulfilled(state);
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,
  //   [addContact.pending]: handlePending,
  //   [addContact.fulfilled](state, action) {
  //     handleFulfilled(state);
  //     state.items.push(action.payload);
  //   },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     console.log('action:', action.payload);

  //     // handleFulfilled(state);
  //     // const index = state.items.findIndex(
  //     //   contact => contact.id === action.payload.id
  //     // );
  //     // console.log("index:", index)
  //     // state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: handleRejected,
  //   [updateContact.pending]: handlePending,
  //   [updateContact.fulfilled](state, action) {
  //     handleFulfilled(state);
  //     const index = state.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.items.splice(index, 1, action.payload);
  //   },
  //   [updateContact.rejected]: handleRejected,
  // },
});
