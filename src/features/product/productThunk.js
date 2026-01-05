import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchproduct = createAsyncThunk(
    "prodct/fetchproduct",
    async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/api/products`)
            return res.data.data;
        } catch (error) {
            console.log(error)
        }
    }
)

export const fetchsingleproduct = createAsyncThunk(
    "product/fetchsingleproduct",
    async (id) => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_BASEURL}/api/products/${id}`)
            return res.data.data;
        } catch (error) {
            console.log(error)
        }
    }
)