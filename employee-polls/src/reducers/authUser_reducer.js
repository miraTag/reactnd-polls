import {LOGOUT_AUTH_USER, SET_AUTH_USER} from "../actions/authUser_actions";

export default function authUser(state = null, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.authUser;
    case LOGOUT_AUTH_USER:
      return null;
    default:
      return state;
  }
}
