import { createSlice }  from "@reduxjs/toolkit";

import { CreateReviews, Deletereviews, FetchAllReviews, fetchproduct, fetchsingleproduct, Searchproduct, UpdateReviews } from "./productThunk"


const productslice = createSlice({
    name: "products",
    initialState: {
        products: [],
        items:[],
        reviews:[],
        loading: false,
        error: null,
        selectedProduct: {}
    },
    reducers:{
        clearstate(state) {
            state.items = []
        }
    },
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
        builder.addCase(Searchproduct.rejected,(state, action)=>{
            state.loading = false;
            state.error = action.error;
        })
        builder.addCase(Searchproduct.fulfilled,(state, action)=>{
            state.loading = false;
           state.items = action.payload
        })
        builder.addCase(FetchAllReviews.rejected,(state, action)=>{
            state.loading = false;
           state.error = action.error
        })
        builder.addCase(FetchAllReviews.fulfilled,(state, action)=>{
            state.loading = false;
           state.reviews = action.payload
        })
        builder.addCase(UpdateReviews.rejected,(state, action)=>{
            state.loading = false;
           state.error = action.error
        })
        builder.addCase(UpdateReviews.fulfilled,(state, action)=>{
            state.loading = false;
             const index = state.reviews.findIndex(
                r => r._id === action.payload._id
             )
             if(index !== -1){
                state.reviews[index] = action.payload;
             }
        })
        builder.addCase(Deletereviews.rejected,(state, action)=>{
            state.loading = false;
           state.error = action.error
        })
        builder.addCase(Deletereviews.fulfilled,(state, action)=>{
            state.loading = false;
           state.reviews =state.reviews.filter(r => r._id !== action.payload._id)
        })
        builder.addCase(CreateReviews.rejected,(state, action)=>{
            state.loading = false;
           state.error = action.error
        })
        builder.addCase(CreateReviews.fulfilled,(state, action)=>{
            state.loading = false;
           state.reviews.push(action.payload);
        })
    }
})


export const {clearstate} =productslice.actions;
export default productslice.reducer;