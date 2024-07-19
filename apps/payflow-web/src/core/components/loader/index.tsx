import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import style from './style';

type LoaderProps = {
  isLoading: boolean;
};

const Loader: React.FC<LoaderProps> = ({ isLoading = false }) => {
  if (!isLoading) {
    return null;
  }
  return <Box sx={style.loaderWrapper}>{<CircularProgress />}</Box>;
};

export default Loader;
