import { createSlice } from "@reduxjs/toolkit";
import { addtowishlist, getwishlist, removefromwishlist } from "./wishlistthunk";


const wishlistslice = createSlice({
    name:"product/wishlist",
    initialState:{
        loading:false,
        items:[],
        error:null

    },
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(getwishlist.pending,(state)=>{
            state.loading = true;
        })
          builder.addCase(getwishlist.fulfilled,(state,action)=>{
            state.loading = false;
            state.items = action.payload;
        })
          builder.addCase(addtowishlist.fulfilled,(state,action)=>{
            state.loading = false;
            state.items.push(action.payload);

        })
         builder.addCase(removefromwishlist.fulfilled,(state,action)=>{
             state.items = state.items.filter(item => item._id !== action.payload._id);
        })
        

    }
})

export default wishlistslice.reducer;