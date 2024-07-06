import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h2>admin lay out</h2>
      <Outlet/>
    </div>
  );
};

export default AdminLayout;
