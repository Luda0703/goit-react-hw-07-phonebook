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
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {contacts.map(({name, number, id}) => (
            <Li key={id}>
               <P>{name}: {number}</P>
               <Button 
               type="button"
               onClick={() => (dispatch(deleteContact(id)))}
               >Delete
               </Button>
            </Li>
        ))}
        </Ul>
    );
}
