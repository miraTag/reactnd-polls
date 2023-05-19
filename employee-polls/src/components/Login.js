import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../actions/authUser_actions";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("sarahedo");
  const [password, setPassword] = useState("password123");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    setUsername("");
    setPassword("");
  };

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl || "/"} />;
  }

  return (
    <div className="text-center py-5 my-5">
      <h1 className="p-5" data-testid="login-heading">
        Login
      </h1>
      <form
        onSubmit={handleSubmit}
        className="form-sign text-center d-flex-column justify-content-center"
      >
        <div>
          <label htmlFor="username">Username</label>
          <div className="mt-2 d-flex align-items-center justify-content-center">
            <input
              value={username}
              onChange={handleUsername}
              type="text"
              name="username"
              id="username"
              data-testid="username"
              className="px-3 w-100 rounded form-control"
            />
          </div>
        </div>
        <div className="py-4">
          <label htmlFor="password">Password</label>
          <div className="mt-2 d-flex align-items-center justify-content-center">
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              name="password"
              id="password"
              data-testid="password"
              className="px-3 w-100 rounded form-control"
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            data-testid="submit"
            className="btn-lg w-100 btn btn-primary"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authUser }) => ({
  loggedIn: !!authUser,
});

export default connect(mapStateToProps)(Login);
