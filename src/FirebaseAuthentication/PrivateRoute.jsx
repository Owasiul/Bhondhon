import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, Loading } = useContext(AuthContext);
  if (Loading) {
    return <Loading></Loading>;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
