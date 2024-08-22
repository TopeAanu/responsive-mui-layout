import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      sx={{
        backgroundColor: '#3f51b5',
        color: '#fff',
        textAlign: 'center',
        padding: 2,
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Typography variant="body1">© Jojo Gat You 2024</Typography>
    </Box>
  );
};

export default Footer;