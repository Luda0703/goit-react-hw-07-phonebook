import { Ul, Li, Button, P } from './ContactList.styled'
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from 'Redux/contactsFetch';
import { getError, getIsLoading, getVisibleContacts } from 'Redux/selectors'; 
import { useEffect } from 'react';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getVisibleContacts);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return (
        
        <Ul>
        {isLoading && "Loader..."}
        {error && <div>{error}</div>}
        {contacts.map(({name, phone, id}) => (
            <Li key={id}>
               <P>{name}: {phone}</P>
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
