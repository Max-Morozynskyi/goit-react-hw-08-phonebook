import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { selectError } from 'redux/contacts/selectors';

export const App = () => {
  const errorMessage = useSelector(selectError);
  return (
    <>
      <h1>Phonebook</h1>
      {errorMessage && <p>{errorMessage}</p>}
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
