import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../feature/slice/productSlice';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AllProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    dispatch(getProducts()).then((action) => setProducts(action.payload.data.products));
  }, []);
  return (
    <Box>
      <Typography sx={{ fontSize: '20px', mt: 10 }}>All Products</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {products.slice(0, 12).map((p) => {
          return (
            <Card key={p.id} sx={{ mt: '20px', display: 'flex', ml: 6, alignItems: 'center' }}>
              <CardMedia sx={{ height: 140, width: '140px' }} image={p.thumbnail} title="green iguana" />
              <CardContent>
                <Typography gutterBottom sx={{ fontSize: '16px', fontWeight: '600' }} component="div">
                  {p.title}
                </Typography>
                <Typography sx={{ fontWeight: '600' }} variant="body2" color="#54b5f5">
                  ${p.price}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default AllProducts;
