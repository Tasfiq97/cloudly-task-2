import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <>
      <Box sx={{ mt: 0 }}>
        <AppBar position="static" sx={{ backgroundColor: '#1b6392', px: 20, mt: 0 }}>
          <Toolbar>
            <Typography component="div" variant="h5">
              Shop
            </Typography>
            <Typography component="div" variant="h6" sx={{ ml: 3 }}>
              Home
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
