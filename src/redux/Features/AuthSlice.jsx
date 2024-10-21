// AuthSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isLogged: false
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLogged = false;
    }
  }
});


export const { login, logout } = AuthSlice.actions;


export default AuthSlice.reducer;
