import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
   name: "auth",
   initialState: {
      root_loading: true,
      loading: false,
      error: null,
      isAuthenticate: false,
      user: null,
   },
   reducers: {
      authLoading: (state, action) => {
         state.loading = action.payload;
      },
      rootLoading: (state, action) => {
         state.root_loading = action.payload;
      },
      isAuthenticate: (state, action) => {
         state.isAuthenticate = action.payload;
      },
      authError: (state, action) => {
         state.error = action.payload;
      },
      loginToken: (state, action) => {
         localStorage.setItem("token", action.payload?.idToken);
      },
      logout: (state) => {
         localStorage.clear();
         state.isAuthenticate = false;
         state.user = null;
      },
      userOnLoad: (state, action) => {
         const { displayName, email, photoUrl } = action.payload.users[0].providerUserInfo[0];
         state.user = {
            profile: { name: displayName, email, image: photoUrl },
            allowRoles: ["user", "admin"],
         };
      },
   },
});
export const { authLoading, authError, loginToken, rootLoading, isAuthenticate, userOnLoad, logout } = authSlice.actions;
export default authSlice.reducer;
