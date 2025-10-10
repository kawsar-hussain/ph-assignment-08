import React from "react";

const HomeApp = ({ app }) => {
  const { image, title, companyName, downloads, ratingAvg } = app;
  return (
    <div className="p-2 lg:p-3 bg-white rounded-md flex flex-col justify-between  hover:scale-[1.01] hover:shadow-md duration-75">
      <div className="p-2 lg:p-10">
        <img className="w-full rounded-md" src={image} alt="" />
      </div>
      <div>
        <p className="font-bold text-md pt-2 text-gray-700">{title}</p>
        <p className="text-xs pt-1 pb-4 text-gray-500">{companyName}</p>
        <div className="flex justify-between">
          <div className="flex items-center bg-[#00d39027] px-2 lg:px-3 py-1 lg:py-2 rounded-sm ">
            <img className="w-3 lg:w-4 mr-1.5 lg:mr-2 " src="/icon-downloads.png" alt="" />
            <span className="text-xs lg:text-[16px] font-medium text-[#009566]">{downloads / 1000000}M</span>
          </div>
          <div className="flex items-center  bg-[#ff881125]  px-2 lg:px-3  py-1 rounded-sm ">
            <img className="w-3 lg:w-4 mr-1.5 lg:mr-2 " src="/icon-ratings.png" alt="" />
            <span className="text-xs lg:text-[16px] font-medium text-[#e67402]"> {ratingAvg}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeApp;
