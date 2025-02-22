import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {
        email: "",
        firstName: "",
        lastName: "",
        image: "",
        _id: ""
    },
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, value) {
            state.user = value.payload;
        },
        setToken(state, value) {
            state.token = value.payload;
        },
    },
});

export const { setUser, setToken } = authSlice.actions;
export default authSlice.reducer;