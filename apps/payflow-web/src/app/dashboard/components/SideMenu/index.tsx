import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const SideMenu = ({ width = 250 }: { width?: number }) => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <Drawer variant="permanent">
      <Box sx={{ width }} role="presentation">
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
