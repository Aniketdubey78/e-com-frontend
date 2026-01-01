import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getwishlist = createAsyncThunk(
    "wishlist/get",
    async (_,{ rejectWithValue }) => {
       try {
         const token = localStorage.getItem("token");
        const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/api/wishlist`,
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
export const addtowishlist = createAsyncThunk(
    "wishlist/add",
    async (productId,{ rejectWithValue }) => {
       try {
        const token = localStorage.getItem("token");
        // POST to collection endpoint with productId in body
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/wishlist`,
            { productId },
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
export const removefromwishlist = createAsyncThunk(
    "wishlist/remove",
    async (productId,{ rejectWithValue }) => {
       try {
        const token = localStorage.getItem("token");
        // DELETE the resource by id
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/wishlist`,
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
