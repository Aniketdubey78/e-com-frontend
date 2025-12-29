import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchproduct = createAsyncThunk(
    "prodct/fetchproduct",
    async() => {
        const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/products`)
        return res.data.data;
    }
)

export const fetchsingleproduct = createAsyncThunk(
    "product/fetchsingleproduct",
    async (id) => {
        const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/product/:${id}`)
        res.data.data;
    }
)