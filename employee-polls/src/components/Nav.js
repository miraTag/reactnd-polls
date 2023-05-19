import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../actions/authUser_actions";
const Nav = ({ dispatch, authUserId, avatarURL }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };
  return (
    <nav className="d-flex align-items-center justify-content-center justify-content-lg-between">
      <div className="text-start">
        <Link to="/" className="px-3 py-2 rounded-lg">
          Home
        </Link>
        <Link to="/leaderboard" className="px-3 py-2 rounded-lg">
          Leaderboard
        </Link>
        <Link to="/new" className="px-3 py-2">
          New Poll
        </Link>
      </div>
      <div className="text-end" data-testid="user-info">
        <img
          src={avatarURL}
          alt={authUserId}
          width="32"
          height="32"
          className="rounded-circle"
          data-testid="user-avatar"
        />
        <span className="px-3 py-2" data-testid="user-id">
          {authUserId}
        </span>
        <button
          onClick={logout}
          className="px-3 py-2 btn-primary btn rounded-lg "
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ authUser: { id, avatarURL } }) => ({
  authUserId: id,
  avatarURL,
});
export default connect(mapStateToProps)(Nav);
