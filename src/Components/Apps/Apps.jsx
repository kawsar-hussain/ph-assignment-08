import React, { use } from "react";
import App from "./App";

const Apps = ({ appsPromise }) => {
  const apps = use(appsPromise);

  return (
    <div className="app">
      <h2 className="text-3xl font-bold text-center pt-[30px] text-gray-700">Our All Applications</h2>
      <p className="text-center text-gray-600 pt-2 pb-10">Explore All Apps on the Market developed by us. We code for Millions</p>
      <div className="grid grid-cols-4 gap-4">
        {apps.map((app) => (
          <App key={app.id} app={app}></App>
        ))}
      </div>
    </div>
  );
};

export default Apps;
