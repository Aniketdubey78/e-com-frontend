import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getcart = createAsyncThunk(
    "cart/get",
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
        console.log("i am in get cart");
        
        console.log(res.data)
        return res.data.data.cart;
       } catch (error) {
        return rejectWithValue({ message: error.response?.data?.message || error.message });
       }
    }
)
export const Addtocarts = createAsyncThunk(
    "cart/Add",
    async (productId,{ rejectWithValue }) => {
       console.log(productId)
        
       try {
         const token = localStorage.getItem("token");
        console.log(token);
        
         
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/cart`,
            {productId},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        
        console.log(res.data.data)
       return res.data.data;

       } catch (error) {
        return rejectWithValue({ message: error.response?.data?.message || error.message });
       }
    }
)
export const removefromCart = createAsyncThunk(
    "cart/Remove",
    async (productId,{rejectWithValue }) => {
       try {
         const token = localStorage.getItem("token");
        const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/cart`,
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