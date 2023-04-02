import { ContactsHeader } from "components/ContactsHeader/ContactsHeader";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

const Phonebook = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <ContactsHeader />
      <Filter />
      <ContactList />
    </div >
  );
}

export default Phonebook;