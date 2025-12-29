import { createSlice } from "@reduxjs/toolkit";
import { loginuser, ragisteruser } from "./auththunk";


const authslice = createSlice({
    name:"auth",
    initialState:{
        user:JSON.parse(localStorage.getItem("user")) || null,
        token:localStorage.getItem("token") || null,
        isauthenticated : !!localStorage.getItem("token")
    },
    reducers:{
    login:(state) => {
       state.token = null;
       state.isauthenticated = false;

       localStorage.removeItem("user");
       localStorage.removeItem("token");
    }},
    extraReducers:(builder) => {
        builder.addCase(ragisteruser.fulfilled,(state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isauthenticated = true;
        })
        builder.addCase(loginuser.fulfilled,(state,action) => {
             state.user = action.payload.user;
            state.token = action.payload.token;
            state.isauthenticated = true;

            localStorage.setItem("user",JSON.stringify(user));
            localStorage.setItem("token",token);
        })
        builder.addCase(loginuser.rejected,(state) => {
        state.user = null;
            state.token = null;
            state.isauthenticated = false;
        })
    }
})

export const {logout} = authslice.actions;
export default authslice.reducer;