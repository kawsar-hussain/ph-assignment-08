import React from "react";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="h-[70vh]">
      <img className="m-auto mt-[80px]" src="/public/App-Error.png" alt="" />

      <Link to="/app">
        <button className="btn w-[150px] m-auto mt-12">Go Back</button>
      </Link>
    </div>
  );
};

export default AppNotFound;
