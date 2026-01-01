import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getcart = createAsyncThunk(
    "wishlist/get",
    async (_,{ rejectWithValue }) => {
       try {
         const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/api/cart`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return res.data.data;
       } catch (error) {
        return rejectWithValue({ message: error.response?.data?.message || error.message });
       }
    }
)
export const Addtocarts = createAsyncThunk(
    "wishlist/Add",
    async (productId,{ rejectWithValue }) => {
       try {
         const token = localStorage.getItem("token");
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/cart/${productId}`,
            {productId},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return res.data.data;
       } catch (error) {
        return rejectWithValue({ message: error.response?.data?.message || error.message });
       }
    }
)
export const removefromCart = createAsyncThunk(
    "wishlist/Remove",
    async (productId,{ rejectWithValue }) => {
       try {
         const token = localStorage.getItem("token");
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/cart/${productId}`,
            {productId},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return res.data.data;
       } catch (error) {
        return rejectWithValue({ message: error.response?.data?.message || error.message });
       }
    }
)