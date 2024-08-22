import React from 'react';
import { Grid, Typography, Paper } from '@mui/material'; // Import MUI components: Grid for layout, Typography for styled text, and Paper for a material design card-like surface 

const Content = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper 
            sx={{ 
              padding: 2, 
              textAlign: 'center', 
              backgroundColor: '#64b5f6', // Example color
              height: '200px', // Fixed height for square shape
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6">Box {index + 1}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Content;