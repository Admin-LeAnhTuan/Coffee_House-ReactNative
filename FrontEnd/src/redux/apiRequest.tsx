import axios from "axios";
import { getAllCoursesStart, getAllCoursesSuccess, getAllCoursesFail } from "./slice/productSlice"
import { Dispatch } from 'redux';

export const getAllCourses = () => async (dispatch: any) => {
    dispatch(getAllCoursesStart());
    try {
        const res = await axios.get("http://192.168.19.69:8080/product/");
        dispatch(getAllCoursesSuccess(res.data));
    } catch (err) {
        dispatch(getAllCoursesFail());
    }
}

        