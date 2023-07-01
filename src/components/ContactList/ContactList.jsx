import { Ul, Li, Button, P } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contactsFetch';
import { getVisibleContacts } from 'Redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
 
  return (
    <Ul>
      {contacts.map(({ name, phone, id }) => (
        <Li key={id}>
          <P>
            {name}: {phone}
          </P>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
