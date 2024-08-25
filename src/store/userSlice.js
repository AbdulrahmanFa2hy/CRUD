import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  idUserUpdate: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      const existingUser = state.users.find(
        (user) => user.id === action.payload.id
      );
      if (existingUser) {
        existingUser.name = action.payload.name;
        existingUser.email = action.payload.email;
      }
    },
  },
});

export default userSlice.reducer;
export const { addUser, updateUser, deleteUser } = userSlice.actions;
