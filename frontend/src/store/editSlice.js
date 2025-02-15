import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "editNote",
  initialState: {},
  reducers: {
    editNote: (state, action) => {
      return action.payload;
      
    },
  },
});

export const editAction = editSlice.actions;
export default editSlice;