import { 
  productCategories,
  allProducts,
  getUuid,
  getId,
  getMe,
} from './service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProductCategories = createAsyncThunk(
  'get_product_categories',
  async () => {
    const response = await productCategories();
    return response;
  }
);

export const getAllProducts = createAsyncThunk(
  'get_all_products',
  async (data) => {
    const response = await allProducts(data);
    return response;
  }
);

export const getUserId = createAsyncThunk(
  'get_id',
  async () => {
    const response = await getId();
    return response;
  }
);

export const getUserUuid = createAsyncThunk(
  'get_uuid',
  async () => {
    const response = await getUuid();
    return response;
  }
);

export const getMeInfo = createAsyncThunk(
  'get_me',
  async () => {
    const response = await getMe();
    return response;
  }
);
