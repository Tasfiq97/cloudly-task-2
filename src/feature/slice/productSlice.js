import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  products: [],
  product: {},
  categories: [],
  error: '',
};

export const getProducts = createAsyncThunk('products/getProducts', async () => {
  const data = await axios.get('https://dummyjson.com/products');
  return data;
});
export const getProductsByCategory = createAsyncThunk('products/getProductsByCategory', async (category) => {
  const data = await axios.get(`https://dummyjson.com/products/category/${category}`);
  return data;
});
export const getCategories = createAsyncThunk('products/categories', async () => {
  const data = await axios.get(`https://dummyjson.com/products/categories`);
  return data;
});
export const getProductsById = createAsyncThunk('products/getProductsById', async (id) => {
  const data = await axios.get(`https://dummyjson.com/products/${id}`);
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.error = null;
        state.products = action.payload.data.products;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductsByCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.error = null;
        state.products = action.payload.data.products;
        state.isLoading = false;
      })
      .addCase(getProductsByCategory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.error = null;
        state.categories = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductsById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsById.fulfilled, (state, action) => {
        state.error = null;
        state.product = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getProductsById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
