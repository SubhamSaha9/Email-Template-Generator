import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    screenSize: "desktop",
};

const authSlice = createSlice({
    name: "screen",
    initialState: initialState,
    reducers: {
        setScreenSize(state, value) {
            state.screenSize = value.payload;
        },
    },
});

export const { setScreenSize } = authSlice.actions;
export default authSlice.reducer;