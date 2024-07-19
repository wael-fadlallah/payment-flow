'use client';
import { Box } from '@mui/material';
import React from 'react';
import { PayflowContext } from '../../contexts/PayflowContextProvider';
import Loader from '../../core/components/loader';

export default ({ children }: { children: React.ReactNode }) => {
  const {
    state: { loading },
  } = React.useContext(PayflowContext);
  return (
    <Box className="flex justify-center items-center min-h-screen flex-col">
      <Loader isLoading={loading} />
      <Box className="lg:w-1/3 p-4">{children}</Box>
    </Box>
  );
};
