import { Navigate } from "react-router-dom";

function PublicRoute({ children, user }) {
  let token = localStorage.getItem("token");
  if (user && token) {
    if (user.type === "superadmin") {
      return <Navigate to="/dashboard-superadmin" replace={true} />;
    } else if (user.type === "admin") {
      return <Navigate to="/dashboard-admin" replace={true} />;
    } else {
      return <Navigate to="/dashboard" replace={true} />;
    }
  }
  return children;
}

export default PublicRoute;
