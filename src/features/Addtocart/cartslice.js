import { createSlice } from "@reduxjs/toolkit";
import { Addtocarts, getcart, removefromCart } from "./cartthunk";

const cartslice = createSlice({
  name: "product/Cart",
  initialState: {
    loading: false,
    Carts: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getcart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getcart.fulfilled, (state, action) => {
      state.loading = false;
      state.Carts = action.payload;
    });
    builder.addCase(Addtocarts.fulfilled, (state, action) => {
      state.loading = false;
      
      const newItem = action.payload;
      const alreadyExists = state.Carts.find(
        (item) => item.productId?._id === newItem.productId?._id
      );
      if(!alreadyExists){
         state.Carts.push(newItem);
      }
      console.log(action.payload.id);
    });
    builder.addCase(removefromCart.fulfilled, (state, action) => {
      state.Carts = state.Carts.filter(
        (item) => item._id !== action.payload._id
      );
    });
  },
});

export default cartslice.reducer;
