import React, { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Global from "../pages/Gobal";
import Capital from "../pages/capital";
import Polittics from "../pages/Politics";
import Navbar from "../component/navbar";
import Login from "../pages/auth/login";
import Signup from "../pages/auth/register";
import Nation from "../pages/Nation";
import AuthWrapper from "./authwrapper";
import Dashboard from "../pages/admin/Setting";
import Setting from "../pages/admin/Setting";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
// import { Provider } from "react-redux";
const NWRoute = () => {
  const authCtx = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authCtx;
  const path = useLocation().pathname;
  useEffect(() => {
    if (isLoggedIn) {
      if (path === "/login") {
        window.location.href = "/admin/dashboard";
      }
    }
  }, [path, isLoggedIn]);
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Capital",
      path: "/capital",
    },
    {
      name: "Nation",
      path: "/nation",
    },
    {
      name: "Politics",
      path: "/politics",
    },
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
  ];
  const adminRoute = [
    {
      element: <Dashboard />,
      path: "/dashboard",
    },
    {
      element: <Setting />,
      path: "/setting",
    },
  ];

  return (
    <>
      <Navbar items={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/global" element={<Global />} />
        <Route path="/nation" element={<Nation />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="/political" element={<Polittics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          element={
            <AuthWrapper>
              <Outlet />
            </AuthWrapper>
          }
        >
          {adminRoute?.map((item) => (
            <Route path={`/admin${item.path}`} element={item.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default NWRoute;
