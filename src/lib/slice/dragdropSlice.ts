import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DragDropState {
  dragElementLayout: any;
  selectedElement: any;
  emailTemplate: any[];
}

const initialState: DragDropState = {
  dragElementLayout: null,
  selectedElement: null,
  emailTemplate: [],
};

const dragDropSlice = createSlice({
  name: "dragDrop",
  initialState,
  reducers: {
    setDragElementLayout: (state, action) => {
      state.dragElementLayout = action.payload;
    },
    setSelectedElement: (state, action) => {
      state.selectedElement = action.payload;
      if(action.payload !== null) {
        state.emailTemplate = state.emailTemplate.map((col: any) =>
          col.id === action.payload.layout.id
            ? { ...col, ...action.payload.layout }
            : col);
      }
    },
    setEmailTemplate: (state, action) => {
      state.emailTemplate = action.payload;
      // localStorage.setItem("emailTemplate", JSON.stringify(action.payload));
    },
  },
});

export const { setDragElementLayout, setSelectedElement, setEmailTemplate } = dragDropSlice.actions;
export default dragDropSlice.reducer;
