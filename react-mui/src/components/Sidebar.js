import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material'; // Import MUI components: Box for layout, List for creating a list, ListItem for individual list items, and ListItemText for text within the list items

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#3f51b5', // Darker background color
        height: '100vh',
        padding: 2,
        width: '180px', // Reduced width
        position: 'fixed', // Fixed position
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: 2, // Shadow for depth
        borderRadius: '0 10px 10px 0', // Rounded corners
      }}
    >
      <List>
        <ListItem button sx={{ borderRadius: 1, '&:hover': { backgroundColor: '#5c6bc0' } }}> 
          <ListItemText primary="Dashboard" sx={{ color: '#fff' }} />
        </ListItem>
        <ListItem button sx={{ borderRadius: 1, '&:hover': { backgroundColor: '#5c6bc0' } }}>
          <ListItemText primary="Settings" sx={{ color: '#fff' }} />
        </ListItem>
        <ListItem button sx={{ borderRadius: 1, '&:hover': { backgroundColor: '#5c6bc0' } }}>
          <ListItemText primary="Profile" sx={{ color: '#fff' }} />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;