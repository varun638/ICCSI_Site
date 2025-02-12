import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => (
  <div className="w-full h-full flex flex-col">
    <Header />
    <div>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Main;
