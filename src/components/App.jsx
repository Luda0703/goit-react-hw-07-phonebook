import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, H1, H2 } from './Container.styled';

export function App() {

  return (
    <Container>
        <H1>Phonebook</H1>
        <ContactForm />
        <H2>Contacts </H2>
        <Filter  />
        <ContactList />
      </Container>
  );
  
}


