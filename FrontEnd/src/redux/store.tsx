import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import authReducer from './slice/authSlice';
import categoryReducer from './slice/categorySlice';
import sizeReducer from './slice/sizeSlice';
import userReducer from './slice/userSlice';

export default configureStore({
    reducer: {
        product: productReducer,
        auth : authReducer,
        category : categoryReducer,
        size : sizeReducer,
        user : userReducer,
    }
})