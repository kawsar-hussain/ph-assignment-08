import React, { use } from "react";
import HomeApp from "./HomeApp";
import { Link } from "react-router";

const HomeApps = ({ appsPromise }) => {
  const apps = use(appsPromise);
  return (
    <div className="app">
      <h2 className="text-3xl font-bold text-center pt-4 lg:pt-[50px] text-gray-700">Trending App</h2>
      <p className="text-center text-gray-600 pt-2">Explore All Trending Apps on the Market developed by us</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-3 mt-5 lg:mt-10">
        {apps.map((app) => (
          <HomeApp key={app.id} app={app}></HomeApp>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/app" className="m-auto">
          <button className="btn w-[180px]" style={{ padding: "6px 26px" }}>
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeApps;
