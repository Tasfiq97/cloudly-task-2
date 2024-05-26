import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsByCategory } from '../feature/slice/productSlice';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const ThirdProducts = () => {
  const dispatch = useDispatch();
  const [motor, setMotors] = useState([]);
  useEffect(() => {
    dispatch(getProductsByCategory('motorcycle')).then((action) => setMotors(action.payload.data.products));
  }, []);
  return (
    <Box>
      <Typography sx={{ py: 4 }} variant="h5">
        Motor Cycles
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {motor.slice(0, 4).map((phone) => (
          <Box key={phone.id}>
            <ProductCard phone={phone} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ThirdProducts;
