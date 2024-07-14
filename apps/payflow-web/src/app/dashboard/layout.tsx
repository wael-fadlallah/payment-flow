'use client';
import { Box } from '@mui/material';
import SideMenu from './components/SideMenu';
import style from './style';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO: generic dashboard UI */}
      <SideMenu width={style.sideMenuWidth} />
      <Box sx={style.dasboardContentWraper}>{children}</Box>
    </>
  );
}
