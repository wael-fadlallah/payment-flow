'use client';
import React from 'react';
import PayflowContextProvider from '../contexts/PayflowContextProvider';
import { ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import theme from '../theme';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <PayflowContextProvider>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
      </ThemeProvider>
    </PayflowContextProvider>
  );
};

export default Providers;
