import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';

import css from './ContactForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContactForm = () => {
  const getContacts = state => state.contacts.contacts;
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const formSubmitHandler = event => {
    event.preventDefault();
    const form = event.target;
    const {
      0: { value: name },
      2: { value: number },
    } = event.currentTarget;

    if (
      contacts.length > 0 &&
      contacts.some(contact => contact.name === name)
    ) {
      alert(`${name} is alredy in contact`);
      return;
    }

    name && number && dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={formSubmitHandler} className={css.form}>
      <TextField
        type="text"
        name="name"
        label="Name"
        size="small"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></TextField>

      <TextField
        type="tel"
        name="number"
        label="Number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></TextField>

      <Button variant="contained" size="small" type="submit">
        Add contact
      </Button>
    </form>
  );
};
