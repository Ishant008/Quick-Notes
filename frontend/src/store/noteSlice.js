import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    getNotes: (state, action) => {
      return action.payload;
    },
  },
});

export const notesAction = notesSlice.actions;
export default notesSlice;
