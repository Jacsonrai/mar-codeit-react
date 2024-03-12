import React, { useState } from "react";
import { useSelector } from "react-redux";

const AuthWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const authCtx = useSelector((state) => state.authReducer);
  console.log(authCtx, "auth");

  if (!isLoggedIn) {
    window.location.href = "/login";
  }
  return <>{children}</>;
};

export default AuthWrapper;
