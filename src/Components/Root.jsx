import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import App from "./Apps/Apps";
import Installations from "./Installations";
import Footer from "./Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet>
        <App></App>
        <Installations></Installations>
      </Outlet>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
