export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOGOUT_AUTH_USER = "LOGOUT_AUTH_USER";

export function setAuthUser(authUser) {
    return {
        type: SET_AUTH_USER,
        authUser,
    };
}

export function logoutAuthUser() {
    return {
        type: LOGOUT_AUTH_USER,
    };
}

export function handleLogin(username, password) {
    return (dispatch, getState) => {
        const {users} = getState();

        const user = Object.values(users).find((user) => user.id === username && user.password === password);

        if (!!user) {
            return dispatch(setAuthUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch) => {
        return dispatch(logoutAuthUser());
    };
}
