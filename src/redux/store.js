import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { getUserApi } from "./getUser/getUser";
export const store = configureStore({
  reducer: {
    user: userReducer,
    [getUserApi.reducerPath]: getUserApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getUserApi.middleware)
});
