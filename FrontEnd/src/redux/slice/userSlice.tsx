import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: false,
        listUser: [],
        success: false,
    },
    reducers: {
        getAllUserStart: (state) => {
            state.loading = true;
        },
        getAllUserSuccess: (state, action) => {
            state.loading = false;
            state.listUser = action.payload; 
          },
        getAllUserFail: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const { 
    getAllUserStart, 
    getAllUserSuccess, 
    getAllUserFail
} = userSlice.actions;

export default userSlice.reducer;