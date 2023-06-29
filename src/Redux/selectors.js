export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getVisibleContacts = ({ contacts, filter}) => {
    if(!filter) {
        return contacts
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
}