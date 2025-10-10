import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import Apps from "./Apps/Apps";
import Installations from "./Installations";
import Footer from "./Footer";
import Header2 from "./Header2";

const Root = () => {
  return (
    <div>
      <Header></Header>
      {/* <Header2></Header2> */}
      <Outlet>
        <Apps></Apps>
        <Installations></Installations>
      </Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
