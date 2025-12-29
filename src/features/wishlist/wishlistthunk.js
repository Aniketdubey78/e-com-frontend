import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getwishlist = createAsyncThunk(
    "wishlist/get",
    async (_,{ rejectWithValue }) => {
       try {
         const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/wishlist`,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return res.data.data;
       } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
       }
    }
)
export const addtowishlist = createAsyncThunk(
    "wishlist/add",
    async (productId,{ rejectWithValue }) => {
       try {
        const token = localStorage.getItem("token");
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/wishlist`,
            {productId},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return res.data.data;
       } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
       }
    }
)
export const removefromwishlist = createAsyncThunk(
    "wishlist/remove",
    async (productId,{ rejectWithValue }) => {
       try {
        const token = localStorage.getItem("token");
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/wishlist`,
            {productId},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        return res.data.data;
       } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
       }
    }
)
