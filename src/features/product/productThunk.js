import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchproduct = createAsyncThunk(
  "prodct/fetchproduct",
  async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASEURL}/api/products`
      );
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchsingleproduct = createAsyncThunk(
  "product/fetchsingleproduct",
  async (id) => {
    
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASEURL}/api/products/${id}`
      );
      
      
      
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const Searchproduct = createAsyncThunk(
  "products/search",
  async (query, { rejectWithValue }) => {
    
    
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASEURL}/api/search?q=${query}`
      );
      
      
      return res.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || error.message
      );
    }
  }
);


export const FetchAllReviews = createAsyncThunk(
  "products/reviews",
  async ( productId ) => {
   
    
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASEURL}/api/product/${productId}/reviews`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const UpdateReviews = createAsyncThunk(
  "products/Updatereviews",
  async ({ productId, rating, comment }) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_BASEURL}/api/product/${productId}/reviews`,
        { rating, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const CreateReviews = createAsyncThunk(
  "products/Createreviews",
  async ({ productId, rating, comment }) => {
    console.log(productId);
    
    console.log(rating,comment)
    const token = localStorage.getItem("token");
    console.log(token);
    
    try {
      const res = await axios.post(
         `${import.meta.env.VITE_API_BASEURL}/api/product/${productId}/reviews`,
        { rating, comment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.data);
      
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const Deletereviews = createAsyncThunk(
  "products/Deletereviews",
  async ({ productId }) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASEURL}/api/product/${productId}/reviews`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
