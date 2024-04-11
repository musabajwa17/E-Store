/* eslint-disable react-refresh/only-export-components */
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/CartSlice";

export default configureStore({
    reducer:{
        cart: cartSlice,
    },
});






