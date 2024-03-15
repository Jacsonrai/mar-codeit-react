import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const SideBar = (props) => {
  const { sidebarItem } = props;
  const path = useLocation().pathname;
  const splitPath = path.split("/");
  const currentPath = splitPath[2];
  return (
    <div
      style={{
        padding: 5,
      }}
    >
      <div>
        <ul>
          {sidebarItem.map((item, index) => (
            <NavLink
              style={{
                textDecoration: "none",
              }}
              to={`/admin/${item.path}`}
            >
              <li
                key={index}
                style={{
                  listStyle: "none",
                  fontSize: "1.3rem",
                  textTransform: "uppercase",
                  color: currentPath === item.path ? "blue" : "gray",
                  cursor: "pointer",
                  fontWeight: "normal",
                  marginBottom: 2,
                }}
              >
                {item.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
