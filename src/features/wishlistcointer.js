import { createSlice } from "@reduxjs/toolkit";


const whishlistcounter = createSlice({
    name:"counter/wishlist",
    initialState:{
        value:0,
        error:null,
    },
    reducers:{
        addinWishlist:(state) =>{
            state.value += 1;
        },
        removetoWishlist:(state) => {
            state.value -=1;
        }
    }
})


export const {addinWishlist,removetoWishlist} = whishlistcounter.actions;
export default whishlistcounter.reducer; 