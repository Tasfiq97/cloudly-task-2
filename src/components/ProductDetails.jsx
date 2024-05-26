import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsById } from '../feature/slice/productSlice';
import SingleProduct from './SingleProduct';

const ProductDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsById(id));
  }, []);
  return (
    <Box sx={{ width: '80%', mx: 'auto' }}>
      <SingleProduct />
    </Box>
  );
};

export default ProductDetails;
