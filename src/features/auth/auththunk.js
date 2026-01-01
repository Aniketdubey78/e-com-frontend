import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const ragisteruser  = createAsyncThunk(
    "auth/register",
    async(data,{rejectWithValue}) => {
      console.log(data)
      try {
          const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/auth/register`,data);
          console.log(res)
        return res.data.data
      } catch (err) {
       return  console.log(err.response.data.message);
      }
    }
)
export const loginuser  = createAsyncThunk(
    "auth/login",
    async(data,{rejectWithValue}) => {
      try {
          const res = await axios.post(`${import.meta.env.VITE_API_BASEURL}/api/auth/login`,data);
        return res.data.data
      } catch (err) {
       return rejectWithValue(err.response.data.message); 
      }
    }
)