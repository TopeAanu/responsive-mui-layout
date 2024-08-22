import React from 'react'; // Import the React library to create components
import { Box } from '@mui/material'; // Import the Grid component from MUI for layout
import Sidebar from './Sidebar'; // Import the Sidebar component
import Header from './Header'; // Import the Header component
import Content from './Content'; // Import the Content component
import Footer from './Footer'; // Import the Footer component

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Box 
          sx={{ 
            marginLeft: '200px', // Space for sidebar
            flexGrow: 1,
            paddingTop: '64px', // Space for header
            padding: 2, // Additional padding for content
          }}
        >
          <Header />
          <Content />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Dashboard; // Export the Dashboard component for use in other files