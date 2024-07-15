'use client';
import { Box } from '@mui/material';
import React from 'react';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <Box className="flex justify-center items-center min-h-screen flex-col">
      <Box className="lg:w-1/3 p-4">{children}</Box>
    </Box>
  );
};
