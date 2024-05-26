import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsByCategory } from '../feature/slice/productSlice';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const SecondaryProducts = () => {
  const dispatch = useDispatch();
  const [laptops, setLaptops] = useState([]);
  useEffect(() => {
    dispatch(getProductsByCategory('laptops')).then((action) => setLaptops(action.payload.data.products));
  }, []);
  return (
    <Box>
      <Typography sx={{ py: 4 }} variant="h5">
        Laptops
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {laptops.slice(0, 4).map((phone) => (
          <Box key={phone.id}>
            <ProductCard phone={phone} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SecondaryProducts;
