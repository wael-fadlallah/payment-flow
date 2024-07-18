import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import Drawer from '@mui/material/Drawer';

const SideMenu = ({ width = 250 }: { width?: number }) => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{ marginTop: '64px' }} role="presentation">
        <List>
          <ListItem>
            <ListItemButton onClick={() => navigate('/dashboard/employees')}>
              <ListItemText primary="employees" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={() => navigate('/dashboard/salaries')}>
              <ListItemText primary="salaries" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default SideMenu;
