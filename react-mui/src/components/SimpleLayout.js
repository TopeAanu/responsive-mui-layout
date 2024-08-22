import React from 'react';
import { Grid } from '@mui/material';

const SimpleLayout = () => {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            backgroundColor: '#e0f7fa',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          Column 1
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            backgroundColor: '#ffecb3',
            padding: '16px',
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          Column 2
        </div>
      </Grid>
    </Grid>
  );
};

export default SimpleLayout;





// Arrow Function: The component is defined using an arrow function.

// Styling: Added inline styles to the divs within each grid item for background color, padding, and text alignment.

// Spacing: Added spacing between grid items using the spacing prop on the container.

// Feel free to customize the styles further! Let me know if you need more adjustments.