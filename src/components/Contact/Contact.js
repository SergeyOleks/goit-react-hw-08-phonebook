import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      {name}: {number}
      <Button variant="contained" size="small" name={id} onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
