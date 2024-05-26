import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarProduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ mt: 0 }}>
        <AppBar position="static" sx={{ backgroundColor: '#1b6392', px: 20, mt: 0 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex' }}>
              <Typography component="div" variant="h5">
                Shop
              </Typography>
              <Typography component="div" variant="h6" sx={{ ml: 3 }}>
                Product Details
              </Typography>
            </Box>
            <Button sx={{ backgroundColor: '#fa8232' }} onClick={() => navigate('/')} variant="contained">
              Go to Home Page
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavbarProduct;
