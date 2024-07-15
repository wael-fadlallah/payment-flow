'use client';
import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography, Box } from '@mui/material';
import style from '../style';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    router.replace('/dashboard');
  };

  function onRegisterClicked() {
    router.push('/auth/register');
  }

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
          onClick={handleSubmit}
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
