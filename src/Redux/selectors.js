// import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = ({ contacts, filter}) => {
    if(!filter) {
        return contacts
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}


// export const getVisibleContacts = createSelector(
//     [getContacts, getFilter],
//     (contacts, filter) => {
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//   );