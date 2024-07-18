'use client';
import { Box, CssBaseline } from '@mui/material';
import SideMenu from './components/sideMenu';
import style from './style';
import Header from './components/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <CssBaseline />
      <Header />
      {/* TODO: generic dashboard UI */}
      <SideMenu width={style.sideMenuWidth} />
      <Box style={style.dasboardContentWraper}>{children}</Box>
    </Box>
  );
}
