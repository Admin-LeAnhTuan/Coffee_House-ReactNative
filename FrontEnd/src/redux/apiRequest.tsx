import axios from "axios";
import { loginStart,loginFail,loginSuccess,createStart,createSuccess,createFail} from "./slice/authSlice"
import { getAllCoursesStart, getAllCoursesSuccess, getAllCoursesFail } from "./slice/productSlice"

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

export const getAllCourses = () => async (dispatch: any) => {
    dispatch(getAllCoursesStart());
    try {
        const res = await axios.get("http://192.168.19.69:3000/categories/");
        dispatch(getAllCoursesSuccess(res.data));
    } catch (err) {
        dispatch(getAllCoursesFail());
    }
}

        