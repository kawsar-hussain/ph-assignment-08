import React, { Suspense } from "react";
import Banner from "./Banner";
import BannerFooter from "./BannerFooter";
import App from "../Apps/App";
import Apps from "../Apps/Apps";
import HomeApps from "./HomeApps";

const appsPromise = fetch("/app8.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BannerFooter></BannerFooter>
      <Suspense
        fallback={
          <div className="loader">
            <img src="/logo.png"></img>
          </div>
        }
      >
        <HomeApps appsPromise={appsPromise}></HomeApps>
      </Suspense>
    </div>
  );
};

export default Home;
