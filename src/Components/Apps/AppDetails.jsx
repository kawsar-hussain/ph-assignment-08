import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Charts from "./Charts";

const AppDetails = () => {
  const details = useLoaderData();

  const [install, setInstall] = useState(false);

  const handleInstall = () => {
    setInstall(!install);
  };

  const { image, title, companyName, downloads, ratingAvg, reviews, description } = details;

  return (
    <div className="app-details">
      <div className="flex gap-10  h-[270px]">
        <div className="w-[270px] bg-white flex justify-center items-center p-4 rounded-md shadow">
          <img src={image} alt="" className="rounded-md" />
        </div>
        {/* app info */}
        <div className="w-full flex flex-col justify-between">
          <h4 className="font-bold text-3xl mb-2">{title}</h4>
          <p className="text-sm text-gray-600">
            Developed by <span className="text-[16px] font-bold text-[#7044d5]">{companyName}</span>
          </p>
          <hr className="text-gray-300 my-6" />
          <div className="flex gap-[80px]">
            <div className="flex flex-col gap-2">
              <img className="w-7" src="/public/icon-downloads.png" alt="" />
              <p className="text-sm text-gray-600">Downloads</p>
              <p className="text-3xl font-bold">{downloads / 1000000}M</p>
            </div>
            <div className="flex flex-col gap-2">
              <img className="w-7" src="/public/icon-ratings.png" alt="" />
              <p className="text-sm text-gray-600">Average Ratings</p>
              <p className="text-3xl font-bold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col gap-2">
              <img className="w-7" src="/public/icon-review.png" alt="" />
              <p className="text-sm text-gray-600">Total Reviews</p>
              <p className="text-3xl font-bold">{reviews / 1000}K</p>
            </div>
          </div>
          {/* install now btn */}
          <button onClick={handleInstall} className="bg-[#0ec289] text-gray-100  py-1 rounded mt-2 self-start cursor-pointer w-[150px]">
            {install ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>
      <hr className="text-gray-300 my-9" />
      <Charts details={details}></Charts>
      <p className="h-10"></p>
      <hr className="text-gray-300 my-9" />
      <h2 className="text-2xl font-bold">Description</h2>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
};

export default AppDetails;
