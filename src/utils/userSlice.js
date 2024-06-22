import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    getUserInfo: (state) => {
      return state;
    },
    removeUser: (state) => {
      return null;
    },
  },
});
export const { getUserInfo, addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
