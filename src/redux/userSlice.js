import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {
    username: null,
    email: null,
    avatar: null,
    fullName: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loading = true;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    toggleLoadingState: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { login, logout, toggleLoadingState } = userSlice.actions;

export const selectLoading = (state) => state.user.loading;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
