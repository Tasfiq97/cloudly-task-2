import { Box, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllProducts from './AllProducts';

const SingleProduct = () => {
  const { isLoading, product } = useSelector((state) => state.products);
  const newPrice = (product.discountPercentage / 100) * product.price;
  const newPriceMain = (newPrice + product.price).toFixed(2);
  const [mainImage, setMainImage] = useState(product.thumbnail);
  useEffect(() => {
    setMainImage(product.thumbnail);
  }, [product.thumbnail]);

  const handleImageClick = (img) => {
    setMainImage(img);
  };
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          border: '2px solid #f5f6f7',
          mt: 2,
          py: 10,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <img style={{ width: '250px' }} src={mainImage} alt="" />
          <Box sx={{ display: 'flex', mt: 5 }}>
            {product.images?.map((img, id) => (
              <img
                style={{ marginTop: '15px', width: '120px', border: '2px solid #f5f6f7', marginLeft: 5 }}
                key={id}
                src={img}
                onClick={() => handleImageClick(img)}
                alt=""
              />
            ))}
          </Box>
        </Box>
        <Box>
          <Box sx={{ display: 'flex' }}>
            <Rating sx={{ fontSize: '14px' }} name="read-only" value={product.rating} readOnly />
            <Typography sx={{ color: '#000', ml: 1, fontSize: '14px' }}>{product.rating} rates</Typography>
          </Box>
          <Typography sx={{ fontSize: '20px' }}>{product.title}</Typography>
          <Typography sx={{ mt: 2, fontSize: '14px' }}>
            Brand: <span style={{ fontWeight: '600' }}>{product.brand}</span>
          </Typography>
          <Typography sx={{ mt: 2, fontSize: '14px' }}>
            Category: <span style={{ fontWeight: '600' }}>{product.category}</span>
          </Typography>
          <Typography sx={{ mt: 2, fontSize: '18px', color: '#54b5f5', fontWeight: '600' }}>
            ${product.price} <span style={{ textDecoration: 'line-through', color: 'grey' }}> ${newPriceMain}</span>{' '}
            <span
              style={{
                padding: '5px',
                backgroundColor: '#efd33d',
                borderRadius: '10px',
                marginLeft: '5px',
                color: '#000',
              }}
            >
              {product.discountPercentage}% off
            </span>
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'left', border: '2px solid #f5f6f7' }}>
        <Typography sx={{ fontSize: '18px' }}>Product Description</Typography>

        <Box sx={{ border: '2px solid #f5f6f7', mt: 7, p: 3 }}>
          <Typography sx={{ fontSize: '16px' }}> Description</Typography>
          <Typography sx={{ mt: 2, width: '40%', color: 'grey', fontSize: '14px', fontWeight: '500' }}>
            {product.description}
          </Typography>
        </Box>
      </Box>
      <Box>
        <AllProducts />
      </Box>
    </Box>
  );
};

export default SingleProduct;
