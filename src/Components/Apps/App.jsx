import React from "react";

const App = ({ app }) => {
  const { image, title, companyName, downloads, ratingAvg } = app;
  return (
    <div className="p-4 bg-white rounded-md flex flex-col justify-between">
      <div className="p-10">
        <img className="w-full rounded-md" src={image} alt="" />
      </div>
      <div>
        <p className="font-bold text-md pt-2">{title}</p>
        <p className="text-xs pt-1 pb-4 text-gray-500">{companyName}</p>
        <div className="flex justify-between">
          <div className="flex items-center bg-[#00d39027] px-2 py-1 rounded-sm ">
            <img className="w-4 mr-2 " src="/icon-downloads.png" alt="" />
            <span className="font-medium text-[#009566]">{downloads / 1000000}M</span>
          </div>
          <div className="flex items-center  bg-[#ff881125] px-2 py-1 rounded-sm ">
            <img className="w-4 mr-2" src="/icon-ratings.png" alt="" />
            <span className="font-medium text-[#e67402]"> {ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
