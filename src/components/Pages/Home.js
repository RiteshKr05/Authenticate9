import React from "react";

import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default Home;
