import { createSlice } from "@reduxjs/toolkit";

 const contacts = []

 const contactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  reducers: {
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;





