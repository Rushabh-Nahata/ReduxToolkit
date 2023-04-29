import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../actions";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    users: UserSlice,
  },
});
export default store;
