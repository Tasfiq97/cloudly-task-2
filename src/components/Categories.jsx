import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../feature/slice/productSlice';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  console.log('🚀 ~ Categories ~ categories:', categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories()).then((action) => setCategories(action.payload.data));
  }, []);
  return (
    <Box>
      <Typography variant="h5" sx={{ p: 2 }}>
        All Categories
      </Typography>
      <Box>
        <Card sx={{ maxWidth: 245, boxShadow: '0 0 30px 0px #f3f3f3 ' }}>
          <CardContent>
            {categories.map((cat) => {
              return (
                <Typography sx={{ color: 'grey', fontSize: '14px', opacity: '0.9' }} key={cat.name}>
                  {cat.name}
                </Typography>
              );
            })}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Categories;
