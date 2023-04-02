import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PropTypes from 'prop-types';
import css from './ContactItemEditor.module.css'

export const ContactItemEditor = ({ contactId, statusUpd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const selectedContact = useSelector(selectContacts).find(contact => contact.id === contactId);
  useEffect(() => {
    setName(selectedContact.name);
    setNumber(selectedContact.number);
  }, [selectedContact])

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

  const handleSubmitUpd = evt => {
    evt.preventDefault();
    const newContact = { contactId, name, number };
    dispatch(updateContact(newContact));
    statusUpd(false)
  };

  return (
    <form className={css.formField} onSubmit={handleSubmitUpd} >
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
      <IconButton aria-label="submit" type="submit" size='small'>
        <CheckCircleOutlineIcon fontSize="inherit" />
      </IconButton>
    </form >
  )
}

ContactItemEditor.propTypes = {
  contactId: PropTypes.string.isRequired,
  statusUpd: PropTypes.func.isRequired,
}