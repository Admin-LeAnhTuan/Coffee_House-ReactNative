import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        loading: false,
        error: false,
        listCourses: [],
        success: false,
    },
    reducers: {
        getAllCoursesStart: (state) => {
            state.loading = true;
        },
        getAllCoursesSuccess: (state, action) => {
            state.loading = false;
            state.listCourses = action.payload; 
          },
        getAllCoursesFail: (state) => {
            state.loading = false;
            state.error = true;
        },
        
    }
})

export const { 
    getAllCoursesStart, 
    getAllCoursesSuccess, 
    getAllCoursesFail,
} = productSlice.actions;

export default productSlice.reducer;