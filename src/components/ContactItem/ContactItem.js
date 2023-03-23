import { useDispatch } from 'react-redux'
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';


export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item} key={id}>
      <span>{name}:</span> <span>{number}</span>
      <button
        className={css.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  )
}

ContactItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}