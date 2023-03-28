import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { useAuth } from "hooks";
import css from './Phonebook.module.css'

const Phonebook = () => {
  const { user } = useAuth();
  return (
    <div className={css.phonebook}>
      <ContactForm />
      <div>
        <h2>Your personal contacts, {user.name}:</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default Phonebook;