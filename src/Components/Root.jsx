import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Apps from "./Apps/Apps";
import Installations from "./Installations";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet>
        <Apps></Apps>
        <Installations></Installations>
      </Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
