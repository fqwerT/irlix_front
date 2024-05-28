import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userPayload:null,
  authError:null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.userPayload = action.payload
    },
    setError: (state, action) => {
      state.authError = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth,setError } = userSlice.actions;

export default userSlice.reducer;
