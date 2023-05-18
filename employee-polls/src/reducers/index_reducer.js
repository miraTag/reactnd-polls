import {combineReducers} from "@reduxjs/toolkit";
import authUser from "./authUser_actions";
import questions from "./questions_actions";
import users from "./users_actions";

export default combineReducers({
    authUser,
    users,
    questions,
});
