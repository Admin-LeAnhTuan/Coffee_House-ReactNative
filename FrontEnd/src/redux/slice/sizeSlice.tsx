import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
    name: 'size',
    initialState: {
        loading: false,
        error: false,
        listSize: [],
        success: false,
    },
    reducers: {
        getAllSizeStart: (state) => {
            state.loading = true;
        },
        getAllSizeSuccess: (state, action) => {
            state.loading = false;
            state.listSize = action.payload; 
          },
        getAllSizeFail: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const { 
    getAllSizeStart, 
    getAllSizeSuccess, 
    getAllSizeFail
} = sizeSlice.actions;

export default sizeSlice.reducer;