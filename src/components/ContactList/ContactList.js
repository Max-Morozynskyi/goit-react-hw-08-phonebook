import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import css from './ContactList.module.css';
import BarLoader from 'react-spinners/BarLoader';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/contacts/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      <BarLoader
        color="brown"
        loading={isLoading}
        size="50px"
        cssOverride={{
          position: 'absolute',
          top: '0',
          left: '10px',
        }}
      />
      {contacts.length === 0
        ? <p>Your Phonebook is empty! All contacts will be here.</p>
        : contacts.filter(item => item.name.toLowerCase().includes(filterValue.toLowerCase())).map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />
        })}
    </ul>

  );
}
