import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartData: []
}
export const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        loadCarts: (state, action) => {
            state.cartData = action.payload
        }
    }
})

export default cartSlice.reducer;
export const { loadCarts } = cartSlice.actions
