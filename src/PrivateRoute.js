import { Navigate } from "react-router-dom";

function PrivateRoute({ children, user }) {
  // let token = localStorage.getItem("token");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
}

export default PrivateRoute;
