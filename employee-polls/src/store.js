import {configureStore} from '@reduxjs/toolkit';
import authUser from "./reducers/authUser_reducer";
import users from "./reducers/users_reducer";
import questions from "./reducers/questions_reducer";

export const store = configureStore({
  reducer: {
    authUser,
    users,
    questions,
  },
});
