import { createSlice }  from "@reduxjs/toolkit";

import { fetchproduct, fetchsingleproduct } from "./productThunk"


const productslice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
        selectedProduct: {}
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchproduct.pending,(state) => {
            state.loading = true;
            state.products = [];
        })
        builder.addCase(fetchproduct.fulfilled,(state,action) => {
            state.products = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchproduct.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
         builder.addCase(fetchsingleproduct.pending,(state) => {
            state.loading = true;
            state.selectedProduct = {};
        })
        builder.addCase(fetchsingleproduct.fulfilled,(state,action) => {
            state.selectedProduct = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchsingleproduct.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
    }
})

export default productslice.reducer;