import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import Categories from './Categories';
import Products from './Products';
import { useDispatch } from 'react-redux';
import { getProducts } from '../feature/slice/productSlice';
import SecondaryProducts from './SecondaryProducts';
import ThirdProducts from './ThirdProducts';
import Featured from './Featured';
import Footer from './Footer';

const HomePage = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Box sx={{ width: '30%' }}>
          <Categories />
        </Box>
        <Box sx={{ width: '70%' }}>
          <Products />
          <Featured />
          <SecondaryProducts />
          <ThirdProducts />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
