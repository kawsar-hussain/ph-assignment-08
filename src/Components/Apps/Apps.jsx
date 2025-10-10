import React, { use, useState, useEffect } from "react";
import App from "./App";
import { Link } from "react-router";

const Apps = ({ appsPromise }) => {
  const apps = use(appsPromise);

  const [query, setQuery] = useState("");
  const [filteredApps, setFilteredApps] = useState(apps || []);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    const t = setTimeout(() => {
      if (!query) {
        setFilteredApps(apps);
      } else {
        const q = query.toLowerCase();
        const result = (apps || []).filter((a) => (a.title || "").toLowerCase().includes(q));
        setFilteredApps(result);
      }
      setSearching(false);
    }, 250);

    return () => clearTimeout(t);
  }, [apps, query]);

  return (
    <div className="app">
      <h2 className="text-3xl font-bold text-center pt-[30px] text-gray-700 ">Our All Applications</h2>
      <p className="text-center text-gray-600 pt-2 pb-10 m">Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className="flex justify-between items-center my-9 ">
        <p className="font-bold text-xl">({filteredApps?.length || 0}) Apps Found</p>
        <div className="border border-gray-400 px-3 py-2 w-[300px] text-sm rounded-[1000px] flex items-center gap-2">
          <i className="fa-solid fa-magnifying-glass text-gray-600 "></i>
          <input className="focus:outline-none focus:ring-0 w-full" type="search" placeholder="Search App" value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>

      {searching ? (
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <p className="flex text-5xl font-bold text-gray-500 mb-8 tracking-widest">
            Lo
            <div className="loader">
              <img src="/logo.png"></img>
            </div>
            ding...
          </p>
        </div>
      ) : filteredApps && filteredApps.length ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-3">
          {filteredApps.map((app) => (
            <App key={app.id} app={app}></App>
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-10 rounded text-gray-600">
          <i className="fa-solid fa-triangle-exclamation text-9xl mb-7"></i>
          <p className="text-gray-500">No apps found</p>
        </div>
      )}
    </div>
  );
};

export default Apps;
