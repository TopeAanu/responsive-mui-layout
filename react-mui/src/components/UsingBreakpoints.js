import React from 'react';
import { Grid, Typography } from '@mui/material';

const UsingBreakpoints = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#e0f7fa',
            padding: 2,
            borderRadius: 1,
            textAlign: 'center',
          }}
        >
          Column 1
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#ffecb3',
            padding: 2,
            borderRadius: 1,
            textAlign: 'center',
          }}
        >
          Column 2
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#ffe0b2',
            padding: 2,
            borderRadius: 1,
            textAlign: 'center',
          }}
        >
          Column 3
        </Typography>
      </Grid>
    </Grid>
  );
};

export default UsingBreakpoints;









// Typography: Used the Typography component for better text styling.

// Styling: Added background colors, padding, border radius, and text alignment for each column.

// Spacing: Included spacing between grid items for better layout.

// This structure improves readability and visual appeal. Let me know if you need further adjustments!