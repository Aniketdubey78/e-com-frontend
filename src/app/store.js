import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/product/productSlice"
import authSlice from "../features/auth/authslice"
import wishlistSlice from "../features/wishlist/wishlistslice" 
import countercart from "../features/wishlistcointer"
import cartslice from "../features/Addtocart/cartslice"


const store = configureStore({
    reducer: {
        auth:authSlice,
        products:productsSlice,
        wishlist:wishlistSlice,
        counter:countercart,
        Cart:cartslice
    }
})
export default store;