import React from "react";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
