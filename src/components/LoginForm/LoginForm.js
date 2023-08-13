import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import css from './LoginForm.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
        type="email"
        name="email"
        label="Email"
        size="small"
      ></TextField>


      <TextField
        className={css.label}
        type="password"
        name="password"
        label="Password"
        size="small"
      ></TextField>

      <Button variant="contained" size="small" type="submit">
        Log In
      </Button>
    </form>
  );
};
