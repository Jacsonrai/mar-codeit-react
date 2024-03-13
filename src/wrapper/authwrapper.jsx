import React from "react";
import { useSelector } from "react-redux";

const AuthWrapper = ({ children }) => {
  const authCtx = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authCtx;
  if (!isLoggedIn) {
    window.location.href = "/login";
  }
  return <>{children}</>;
};

export default AuthWrapper;
