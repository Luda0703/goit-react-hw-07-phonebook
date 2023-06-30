import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;


export const getVisibleContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );

// export const getVisibleContacts = ({ items, filter}) => {
//   if(!filter) {
//       return items
//   }
//   return items.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
// }
