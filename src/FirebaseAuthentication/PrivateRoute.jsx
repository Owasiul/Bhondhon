import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";
import Loading from "../Components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
