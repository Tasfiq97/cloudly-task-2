import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#1b6392', p: 7, color: '#fff' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography sx={{ fontSize: '26px', fontWeight: '600' }}>Subscribe to Our news Letter</Typography>
        <Typography sx={{ fontSize: '14px' }}>join us for the latest news letter</Typography>
        <Typography sx={{ fontSize: '14px' }}>join us to know more </Typography>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <Box sx={{ display: 'flex', color: '#fff', mt: 4 }}>
            <TextField
              sx={{ border: '2px solid #fff', color: '#Fff', backgroundColor: '#fff' }}
              fullWidth
              label="subscribe"
              id="fullWidth"
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fa8232',
                '&:hover': {
                  backgroundColor: '#fa8232',
                },
              }}
            >
              Subscribe <ArrowRightAltIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
