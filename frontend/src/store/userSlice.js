import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance.js";

const userSlice = createSlice({
  name: "user",
  initialState: "",
  reducers: {
    getUser:(state,action)=>{
      return action.payload
    }
  },
});

export const userAction = userSlice.actions;
export default userSlice;