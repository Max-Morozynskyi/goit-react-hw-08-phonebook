import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useContacts } from 'hooks';
import css from './ContactList.module.css';
import BarLoader from 'react-spinners/BarLoader';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList() {
  const dispatch = useDispatch();
  const { contacts, filter, isLoading, } = useContacts;
  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

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
      {contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => {
          <ContactItem id={id} name={name} number={number} />
        })}
    </ul>
  );
}
