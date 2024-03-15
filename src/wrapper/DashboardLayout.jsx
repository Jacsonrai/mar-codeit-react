import React from "react";
import SideBar from "../component/sidebar/sidebar";

const DashboardLayout = ({ children }) => {
  const sidebarItem = [
    {
      name: "Dashboard",
      path: "dashboard",
    },
    {
      name: "Category",
      path: "category",
    },
    {
      name: "News",
      path: "news",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <div
        style={{
          width: "15rem",
          height: "100vh",
          backgroundColor: "#f8f9fa",
          position: "sticky",
        }}
      >
        <SideBar sidebarItem={sidebarItem} />
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
