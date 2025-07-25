import axios from "../API/AxiosConfig"
import { loadProducts } from "../Reducers/ProductSlice"


export const getProductsfromDB = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadProducts(data))
    } catch (error) {
        console.log(error)
    }
}


export const getProducts = (allProducts) => async (dispatch, getState) => {
    try {
        await axios.post("/products", allProducts);
        dispatch(getProductsfromDB())
    } catch (error) {
        console.log(error)
    }
}


export const updateProduct = (id, product) => async (dispatch, getState) => {
    try {
        await axios.patch(`/products/` + id, product);
        dispatch(getProductsfromDB())
    } catch (error) {
        console.log(error)
    }
}


export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        await axios.delete(`/products/` + id);
        dispatch(getProductsfromDB())
    } catch (error) {
        console.log(error)
    }
}
