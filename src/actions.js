import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    DeleteSingle(state, action) {
      state.splice(action.payload, 1);
    },
    DeleteAllUser(state, action) {
      return [];
    },
  },
});

export default UserSlice.reducer;
console.log(UserSlice.reducer);
export const { addUser, DeleteSingle, DeleteAllUser } = UserSlice.actions;
