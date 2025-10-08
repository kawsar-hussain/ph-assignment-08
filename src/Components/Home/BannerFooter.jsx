import React from "react";

const BannerFooter = () => {
  return (
    <div className="banner-footer">
      <h3 className="font-bold text-5xl mb-12">Trusted by Millions, Built for You</h3>
      <div className="banner-info-container flex justify-center gap-[90px]">
        <div className="banner-info">
          <p className="text-sm text-[#d7d7d7]">Total Downloads</p>
          <p className="text-6xl font-bold py-5">29.6M</p>
          <p className="text-sm text-[#d7d7d7]">21% more than last month</p>
        </div>
        <div className="banner-info">
          <p className="text-sm text-[#d7d7d7]">Total Reviews</p>
          <p className="text-6xl font-bold py-5">906K</p>
          <p className="text-sm text-[#d7d7d7]">46% more than last month</p>
        </div>
        <div className="banner-info">
          <p className="text-sm text-[#d7d7d7]">Active Apps</p>
          <p className="text-6xl font-bold py-5">132+</p>
          <p className="text-sm text-[#d7d7d7]">31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default BannerFooter;
