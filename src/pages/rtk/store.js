import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice.js";
import cartSlice from "./Slice/cartSlice.js";

const store = configureStore({
    reducer:{authSlice,cartSlice}
})

export default store