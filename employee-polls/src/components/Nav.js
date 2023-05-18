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
      <Link
        to="/"
        className="px-3 py-2 rounded-lg"
      >
        Home
      </Link>
      <Link
        to="/leaderboard"
        className="px-3 py-2 rounded-lg"
      >
        Leaderboard
      </Link>
      <Link
        to="/new"
        className="px-3 py-2"
      >
        New Poll
      </Link>
      </div>
      <div className="text-end">
      <img src={avatarURL} alt={authUserId} width="32" height="32" className="rounded-circle"/>
      <span
        className="px-3 py-2"
        data-testid="user-information"
      >
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
    //   <header className="p-3 mb-3 ">
    //   <div className="container justify-content-between" >
    //     <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    //       <ul className="nav col-12 col-lg-auto me-lg-auto mb-2  mb-md-0">

    //           <Link to="/" className="nav-link px-2 link-secondary">
    //             Home
    //           </Link>

    //           <Link to="leaderboard" className="nav-link px-2 link-dark">
    //             Leaderboard
    //           </Link>

    //           <Link to="new" className="nav-link px-2 link-dark">
    //             New
    //           </Link>

    //       </ul>
    //       <div className="text-end d-flex">
    //           <img src={avatarURL} alt={authUserId} width="32" height="32" className="rounded-circle"/>
    //          <span className="px-4" data-testid="user-information">{authUserId}</span>
    //            <button className="btn btn-primary" onClick={logout}> Logout</button>

    //     </div>
    //     </div>
    //   </div>
    // </header>
  );
};
const mapStateToProps = ({ authUser }) => ({
  authUserId: authUser.id,
  avatarURL: authUser.avatarURL,
});
export default connect(mapStateToProps)(Nav);
