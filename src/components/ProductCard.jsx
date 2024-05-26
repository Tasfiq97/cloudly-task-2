/* eslint-disable react/prop-types */
import { Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ phone }) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={`/product-details/${phone.id}`}>
      <Card sx={{ width: 220 }}>
        <CardMedia sx={{ height: 240 }} image={phone.thumbnail} title="green iguana" />
        <CardContent sx={{ height: 160 }}>
          <Typography gutterBottom variant="h6" component="div">
            <Rating sx={{ fontSize: '14px' }} name="read-only" value={phone.rating} readOnly />
            <span style={{ color: 'grey', fontSize: '14px', opacity: '0.4' }}>({phone.stock})</span>
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {phone.title}
          </Typography>
          <Typography sx={{ p: 0, fontSize: '12px' }} variant="body2" color="text.secondary">
            {phone.description?.slice(0, 40)}...
          </Typography>
          <Typography sx={{ p: 0, color: '#89ccf8', fontSize: '14px', fontWeight: '700', mt: 2 }} variant="body2">
            $ {phone.price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
