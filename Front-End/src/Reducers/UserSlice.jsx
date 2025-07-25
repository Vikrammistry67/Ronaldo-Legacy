import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userData: null
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loadUser: (state, action) => {
          state.userData = action.payload
        }
    }
})

export default userSlice.reducer;
export const { loadUser } = userSlice.actions
