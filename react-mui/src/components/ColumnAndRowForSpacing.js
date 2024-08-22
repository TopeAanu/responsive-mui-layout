import React from 'react';
import { Grid, Typography } from '@mui/material';

const ColumnAndRowForSpacing = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#e3f2fd',
            padding: 3,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          Column 1
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#ffe0b2',
            padding: 3,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          Column 2
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#c8e6c9',
            padding: 3,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          Column 3
        </Typography>
      </Grid>


      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#e3f2fd',
            padding: 3,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          Column 4
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#e3f2fd',
            padding: 3,
            borderRadius: 2,
            textAlign: 'center',
            boxShadow: 1,
          }}
        >
          Column 5
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ColumnAndRowForSpacing;