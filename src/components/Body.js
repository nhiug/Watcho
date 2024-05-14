import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar className="w-56" />
      <Outlet />
    </div>
  );
};

export default Body;
