import axios from "axios";
import { loginStart,loginFail,loginSuccess,createStart,createSuccess,createFail} from "./slice/authSlice"
import { getAllProductsStart, getAllProductsSuccess, getAllProductsFail, createProductsStart, createProductsSuccess, createProductsFail } from "./slice/productSlice"
import { getAllCateStart,getAllCateSuccess,getAllCateFail } from "./slice/categorySlice"
import { getAllSizeStart, getAllSizeSuccess, getAllSizeFail } from "./slice/sizeSlice"
import { getAllUserStart, getAllUserSuccess, getAllUserFail } from "./slice/userSlice"

// Auth
export const loginUser = (newForm: any) => async (dispatch: any) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://192.168.19.69:8080/authen/login", newForm);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFail());
    }
}

export const createUser = (newForm: any) => async (dispatch: any) => {
    dispatch(createStart());
    try {
        const res = await axios.post("http://192.168.19.69:8080/authen/register", newForm);
        dispatch(createSuccess(res.data));
    } catch (err) {
        dispatch(createFail());
    }
}

// Product
export const getAllProducts = () => async (dispatch: any) => {
    dispatch(getAllProductsStart());
    try {
        const res = await axios.get("http://192.168.19.69:8080/product/");
        dispatch(getAllProductsSuccess(res.data));
    } catch (err) {
        dispatch(getAllProductsFail());
    }
}

export const createProduct = (newForm: any) => async (dispatch: any) => {
    dispatch(createProductsStart());
    try {
        const response = await fetch('http://192.168.19.69:8080/product/create', {
            method: 'POST',
            body: newForm,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch(createProductsSuccess(data));
    } catch (error) {
        dispatch(createProductsFail());
    }
}

//Category
export const getAllCate = () => async (dispatch: any) => {
    dispatch(getAllCateStart());
    try {
        const res = await axios.get("http://192.168.19.69:8080/category/");
        dispatch(getAllCateSuccess(res.data));
    } catch (err) {
        dispatch(getAllCateFail());
    }
}

//Size
// export const getAllSize = () => async (dispatch: any) => {
//     dispatch(getAllSizeStart());
//     try {
//         const res = await axios.get("http://192.168.19.69:8080/category/");
//         dispatch(getAllSizeSuccess(res.data));
//     } catch (err) {
//         dispatch(getAllSizeFail());
//     }
// }

//User
export const getAllUser = () => async (dispatch: any) => {
    dispatch(getAllUserStart());
    try {
        const res = await axios.get("http://192.168.19.69:8080/user/");
        dispatch(getAllUserSuccess(res.data));
    } catch (err) {
        dispatch(getAllUserFail());
    }
}