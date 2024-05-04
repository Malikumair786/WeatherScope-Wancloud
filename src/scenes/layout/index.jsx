import React from "react";

import Sidebar from "component/Sidebar";
import Header from "component/Header/Header";
import Footer from "component/Footer";

import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default index;
