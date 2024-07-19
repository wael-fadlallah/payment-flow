'use client';
import React, { useContext, useState } from 'react';
import { TextField, Button, FormControl, Typography, Box } from '@mui/material';
import style from '../style';
import { useRouter } from 'next/navigation';
import useAPI from '../../../core/network';
import { PayflowContext } from 'apps/payflow-web/src/contexts/PayflowContextProvider';
import { setLoadingState } from 'apps/payflow-web/src/contexts/actions';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const api = useAPI();
  const { dispatch, state } = useContext(PayflowContext);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    dispatch(setLoadingState(true));
    try {
      dispatch(setLoadingState(true));
      const res = await api.post('/login', { email, password });
      dispatch(setLoadingState(false));
      localStorage.setItem('accessToken', res.accessToken);
      router.replace('/dashboard');
    } catch (err) {
      dispatch(setLoadingState(false));
      console.error(err);
    }
  };

  const onRegisterClicked = () => {
    router.push('/auth/register');
  };

  return (
    <Box>
      <Typography variant="h4" className="m-3">
        Welcome to Payflow
      </Typography>
      <FormControl fullWidth sx={style.formControl}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleLogin}
        >
          Login
        </Button>
        <br />
        <Button
          variant="text"
          color="primary"
          size="large"
          onClick={onRegisterClicked}
        >
          Or create an account
        </Button>
      </FormControl>
    </Box>
  );
};

export default LoginPage;
