import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { IconButton } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { ContactItemEditor } from '../ContactItemEditor/ContactItemEditor'


export const ContactItem = ({ id, name, number }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  return <li className={css.item} >
    {isEditing ? <ContactItemEditor contactId={id} statusUpd={setIsEditing} /> : (<>
      <span>{name}:</span> <span className={css.number}>{number}</span>
      <IconButton aria-label="edit" size='small' onClick={() => setIsEditing(true)}>
        <BorderColorIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size='small' onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon fontSize="inherit" />
      </IconButton></>
    )}
  </li>

}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}