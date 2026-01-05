import { createSlice } from "@reduxjs/toolkit";


const whishlistcounter = createSlice({
    name:"counter/wishlist",
    initialState:{
        value: Number(localStorage.getItem("cartCount")) || 0,
        error:null,
    },
    reducers:{
        addinWishlist:(state) => {
      state.value += 1;
      localStorage.setItem("cartCount", state.value);
    },
        removetoWishlist:(state) => {
      state.value -= 1;
      localStorage.setItem("cartCount", state.value);
    
        }
    }
})


export const {addinWishlist,removetoWishlist} = whishlistcounter.actions;
export default whishlistcounter.reducer; 