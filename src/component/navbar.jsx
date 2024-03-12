import React from "react";
import NWButton from "./NWButton";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useLocation } from "react-router-dom";
const Navbar = ({ items }) => {
  const loc = useLocation().pathname;
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {items.map((item, index) => {
                return (
                  <Link to={item.path} className="link-nav" key={index}>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        style={{
                          color: item.path === loc ? "blue" : "black",
                        }}
                        aria-current="page"
                        href="#"
                      >
                        {item.name}
                      </a>
                    </li>
                  </Link>
                );
              })}
            </ul>
            <div
              className="d-flex"
              style={{
                gap: 10,
              }}
            >
              <NWButton onClick={handleLogin}>Login</NWButton>

              <Link to={"/signup"}>
                <NWButton name="search" type="submit">
                  Signup
                </NWButton>
              </Link>

              <NWButton name="search" type="submit">
                Logout
              </NWButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
