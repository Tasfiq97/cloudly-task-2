import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import HomePage from '../components/HomePage';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ px: 20 }}>
        <HomePage />
      </Box>
      <Box sx={{ mt: 8 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
