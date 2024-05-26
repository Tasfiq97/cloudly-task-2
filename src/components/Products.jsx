import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, getProductsByCategory } from '../feature/slice/productSlice';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const Products = () => {
  const dispatch = useDispatch();
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    dispatch(getProductsByCategory('smartphones')).then((action) => setPhones(action.payload.data.products));
  }, []);
  return (
    <Box>
      <Typography sx={{ py: 4 }} variant="h5">
        Smart Phones
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {phones.slice(0, 4).map((phone) => (
          <Box key={phone.id}>
            <ProductCard phone={phone} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Products;
