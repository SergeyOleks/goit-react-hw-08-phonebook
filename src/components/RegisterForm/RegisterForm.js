import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import css from './RegisterForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        className={css.label}
        type="text"
        name="name"
        label="Username"
        size="small"
      ></TextField>

      <TextField
        className={css.label}
        type="email"
        name="email"
        label="Email"
        size="small"
      ></TextField>

      <TextField
        className={css.label}
        type="email"
        name="password"
        label="Password"
        size="small"
      ></TextField>

      <Button variant="contained" size="small" type="submit">
        Register
      </Button>
    </form>
  );
};
