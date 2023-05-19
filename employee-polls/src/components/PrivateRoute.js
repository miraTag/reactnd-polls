import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const loggedIn = useSelector((state) => !!state.authUser);
  const redirectUrl = location.pathname;

  return loggedIn ? children : <Navigate to={`/login?redirectTo=${redirectUrl}`} />;
};

export default PrivateRoute;
