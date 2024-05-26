import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Featured = () => {
  return (
    <Box sx={{ width: '84%', py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#ffe7d6',
          py: 4,
        }}
      >
        <Box>
          <Typography variant="h6">Macbook Pro</Typography>
          <Typography variant="p" sx={{ mt: 5 }}>
            APPLE MI MAX CHIP 32 GB MEMORY
          </Typography>
          <br />
          <Typography variant="p">1TB SSD STORAGE</Typography>
          <br />
          <Button
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: '#fa8232',
              '&:hover': {
                backgroundColor: '#fa8232',
              },
            }}
          >
            Shop Now <ArrowRightAltIcon />
          </Button>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ mr: '-60px', zIndex: 20, mt: '20px' }}>
            <span
              style={{
                border: '6px solid #fff',
                borderRadius: '100%',
                height: '50px',
                width: '50px',
                backgroundColor: '#ffcead',
                fontSize: '18px',
                padding: '30px 15px',
              }}
            >
              {' '}
              $1999
            </span>
          </Typography>
          <img
            style={{ width: '300px' }}
            src="https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111901_mbp16-gray.png"
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Featured;
