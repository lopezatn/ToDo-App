import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    userList: [],
  },
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
  },
});

export const { login, logout, addUser } = userSlice.actions;

export const selectUsers = (state) => state.user.userList;

export default userSlice.reducer;