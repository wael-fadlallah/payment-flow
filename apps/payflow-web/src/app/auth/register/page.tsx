'use client';
import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography, Box } from '@mui/material';
import style from '../style';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
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

  function onLoginClicked() {
    router.push('/auth/login');
  }

  return (
    <Box>
      <Typography variant="h4" className="m-3">
        New to Payflow? don't worry, we got you covered
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
          Create account
        </Button>
        <br />
        <Button
          variant="text"
          color="primary"
          size="large"
          onClick={onLoginClicked}
        >
          Or Login
        </Button>
      </FormControl>
    </Box>
  );
};

export default RegisterPage;
