import axios from "../API/AxiosConfig"
import { loadUser } from "../Reducers/UserSlice";
import { toast } from "react-toastify"

export const registerUser = (registerData) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post("/users", registerData);
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = (loginData) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/users?email=${loginData.email}&password=${loginData.password}`);
        localStorage.setItem("loggedInUser", JSON.stringify(data[0]))
    } catch (error) {
        console.log(error);
    }
}

export const logOutUser = () => async (dispatch, getState) => {
    try {
        localStorage.removeItem("loggedInUser")
    } catch (error) {
        console.log(error);
    }
}

export const currentUser = (user) => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("loggedInUser"))
        if (user) dispatch(loadUser(user));
        else toast.error("User not loggedIn ")
    } catch (error) {
        console.log(error);
    }
}