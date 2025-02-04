import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "@/lib/slice/authSlice";
import screenReducer from "@/lib/slice/screenSizeSlice";
import dragDropSlice from "@/lib/slice/dragdropSlice";


const rootReducer = combineReducers({
    auth: authReducer,
    screen: screenReducer,
    dragDrop: dragDropSlice
});

export default rootReducer;