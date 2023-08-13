import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/Contacts/filterSlice';

import TextField from '@mui/material/TextField';

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterContacts = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <section>

      <TextField
        onChange={setFilterContacts}
        type="text"
        label="Filter contacts"
        size="small"
      ></TextField>
    </section>
  );
};

