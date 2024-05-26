import { Box } from '@mui/material';
import React from 'react';
import NavbarProduct from '../components/NavbarProduct';
import ProductDetails from '../components/ProductDetails';
import Footer from '../components/Footer';

const ProductDetailsPage = () => {
  return (
    <Box>
      <Box>
        <NavbarProduct />
      </Box>
      <Box>
        <ProductDetails />
      </Box>
      <Box sx={{ mt: 8 }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductDetailsPage;
