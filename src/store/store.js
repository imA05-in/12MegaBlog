import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore({
    reducer:{
        potato: authSlice.reducer
    }
});

export default store;