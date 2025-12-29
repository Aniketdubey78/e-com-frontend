import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/product/productslice"
import authSlice from "../features/auth/authslice"
import wishlistSlice from "../features/wishlist/wishlistslice" 


const store = configureStore({
    reducer: {
        auth:authSlice,
        products:productsSlice,
        wishlist:wishlistSlice
    }
})
export default store;