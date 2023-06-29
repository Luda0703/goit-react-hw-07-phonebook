import { Ul, Li, Button, P } from './ContactList.styled'
import { useDispatch, useSelector } from "react-redux";
import {  deleteContact } from 'Redux/contactsSlice';
import { getVisibleContacts } from 'Redux/selectors'; 

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);

    return (
        <Ul>
        {contacts.map(({name, number, id}) => (
            <Li key={id}>
               <P>{name}: {number}</P>
               <Button 
               type="button"
               onClick={() => dispatch(deleteContact(id))}
               >Delete
               </Button>
            </Li>
        ))}
        </Ul>
    );
}
