import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth", // becomes the prefix to action types
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData
        },
        logout: (state, action) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login,logout} = authSlice.actions //the functions inside reducers

export default authSlice.reducer;