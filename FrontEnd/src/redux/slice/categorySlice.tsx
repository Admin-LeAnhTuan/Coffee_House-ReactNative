import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        loading: false,
        error: false,
        listCategory: [],
        success: false,
    },
    reducers: {
        getAllCateStart: (state) => {
            state.loading = true;
        },
        getAllCateSuccess: (state, action) => {
            state.loading = false;
            state.listCategory = action.payload; 
          },
        getAllCateFail: (state) => {
            state.loading = false;
            state.error = true;
        },
    }
})

export const { 
    
} = categorySlice.actions;

export default categorySlice.reducer;