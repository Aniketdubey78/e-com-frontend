import { createSlice } from "@reduxjs/toolkit";
import { Addtocarts, getcart, removefromCart } from "./cartthunk";


const cartslice = createSlice({
    name:"product/Cart",
    initialState:{
        loading:false,
        Carts:[],
        error:null

    },
    reducers:{},
    extraReducers:(builder) => {
         builder.addCase(getcart.pending,(state)=>{
                    state.loading = true;
                })
                  builder.addCase(getcart.fulfilled,(state,action)=>{
                    state.loading = false;
                    state.Carts = action.payload;
                })
                  builder.addCase(Addtocarts.fulfilled,(state,action)=>{
                    state.loading = false;
                    state.Carts.push(action.payload);
                    console.log(action.payload);
                    
                    
                })
                 builder.addCase(removefromCart.fulfilled,(state,action)=>{
                     state.Carts = state.Carts.filter(item => item._id !== action.payload._id);
                })
    }
})

export default cartslice.reducer;