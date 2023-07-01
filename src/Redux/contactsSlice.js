import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from './contactsFetch'

 const contacts = {
  items: [],
  isLoading: false,
  error: null
}

const handlePending = (state) => {
  state.isLoading = true
}

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
}

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  // state.items = [...state.items, action.payload]
  state.items.push(action.payload);
}

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contacts,
  extraReducers: (builder) => {
    builder
    // .addMatcher(isAnyOf([fetchContacts.pending, 
    //   addContact.pending, deleteContact.pending]), handlePending)
    // .addMatcher(isAnyOf([fetchContacts.fulfilled, 
    //   addContact.fulfilled, deleteContact.fulfilled]), handleFulfilled)
    // .addMatcher(isAnyOf([fetchContacts.rejected, 
    //   addContact.rejected, deleteContact.rejected]), handleRejected)



    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, handleFulfilled)
    .addCase(fetchContacts.rejected, handleRejected)
    .addCase(addContact.pending, handlePending)
    .addCase(addContact.fulfilled, handleFulfilledAdd)
    .addCase(addContact.rejected, handleRejected)
    .addCase(deleteContact.pending, handlePending)
    .addCase(deleteContact.fulfilled, handleFulfilledDelete)
    .addCase(deleteContact.rejected, handleRejected)
  }



  // extraReducers: {
  //   [fetchContacts.pending](state) {
  //     state.isLoading = true;
  //   },
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected](state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
})

export const contactsReducer = contactsSlice.reducer;

// export default contactsSlice.reducer;

// const contacts = []

//  const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contacts,
//   reducers: {
//     deleteContact: (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//     addContact: (state, action) => {
//       return [...state, action.payload];
//     },
//     },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;





