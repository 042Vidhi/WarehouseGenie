// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.email;
    },
    logout: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
