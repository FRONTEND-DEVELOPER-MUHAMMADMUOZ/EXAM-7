import Nav from "@/app/components/navbar/Nav";
import React from "react";

const ListDashboard = ({ children }) => {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
};

export default ListDashboard;
