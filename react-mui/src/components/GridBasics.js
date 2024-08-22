import * as React from 'react';
import { Grid } from '@mui/material';

function GridBasics() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        Item 1
      </Grid>
      <Grid item xs={4}>
        Item 2
      </Grid>
      <Grid item xs={4}>
        Item 3
      </Grid>
    </Grid>
  );
}

export default GridBasics;