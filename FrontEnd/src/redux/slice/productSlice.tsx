import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        error: false,
        listProducts: [],
        success: false,
    },
    reducers: {
        getAllProductsStart: (state) => {
            state.loading = true;
        },
        getAllProductsSuccess: (state, action) => {
            state.loading = false;
            state.listProducts = action.payload; 
          },
        getAllProductsFail: (state) => {
            state.loading = false;
            state.error = true;
        },

        createProductsStart: (state) => {
            state.loading = true;
        },
        createProductsSuccess: (state, action) => {
            state.loading = false;
            state.success = true
          },
        createProductsFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        
    }
})  

export const { 
    getAllProductsStart, 
    getAllProductsSuccess, 
    getAllProductsFail,
    createProductsStart, 
    createProductsSuccess, 
    createProductsFail,
} = productSlice.actions;

export default productSlice.reducer;