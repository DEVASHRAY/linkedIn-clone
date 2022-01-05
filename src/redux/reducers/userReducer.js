import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state, action) => {
      state.user = null;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

//SELECTOR
export const selectUser = (state) => state.users.user;

export default userSlice.reducer;
