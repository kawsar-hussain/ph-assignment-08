import React from "react";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="h-[70vh]">
        <img className="m-auto mt-[80px]" src="/error-404.png" alt="" />

        <Link to="/">
          <button className="btn w-[150px] m-auto mt-12">Go Home</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
