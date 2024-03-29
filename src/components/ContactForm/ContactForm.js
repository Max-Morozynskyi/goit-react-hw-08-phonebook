import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ closingFunc }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts).map(a => a.name.toLowerCase());

  const registerTapping = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = { name, number };
    if (contacts.includes(name.toLowerCase())) {
      alert(`${name} is already in your contacts!`);
      return;
    }
    dispatch(createContact(newContact));
    closingFunc(null);
    setName('');
    setNumber('');
  };

  return (
    <form className={css.formField} onSubmit={handleSubmit} >
      <h3>Create new contact</h3>
      <label className={css.formLabel} htmlFor="name">
        Enter the name:{' '}
      </label>
      <input
        type="text"
        className={css.formInput}
        name="name"
        id="name"
        value={name}
        onChange={registerTapping}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.formLabel} htmlFor="number">
        Enter the phone number:{' '}
      </label>
      <input
        type="tel"
        className={css.formInput}
        name="number"
        id="number"
        value={number}
        onChange={registerTapping}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button color="inherit" variant="outlined" type="submit" className={css.formSubmit}  >Add contact</Button>
    </form >
  );
};

ContactForm.propTypes = {
  closingFunc: PropTypes.func.isRequired,
}