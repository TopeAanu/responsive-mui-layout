import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material'; // Import MUI components: AppBar for top navigation bar, Toolbar for containing elements within the AppBar, and Typography for styled text 

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Dashboard Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;