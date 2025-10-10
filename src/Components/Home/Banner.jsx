import React from "react";

const Banner = () => {
  return (
    <div className="banner ">
      <h1 className="text-center font-bold lg:text-7xl text-3xl pt-7 lg:pt-[100px] gradient-text">
        We Build <br /> Productive Apps
      </h1>
      <p className="m-auto text-center px-3 w-full lg:w-[900px] text-[#727272] mt-2 lg:mt-4">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>

      <div className="flex flex-col lg:flex-row  lg:gap-4 gap-2 items-center justify-center lg:mt-8 mt-4">
        <img className="lg:w-[200px] w-[80%] cursor-pointer" src="/public/PlayStore.jpg" alt="" />
        <img className="lg:w-[200px] w-[80%] cursor-pointer" src="/public/appStore.jpg" alt="" />
      </div>
      <div className="">
        <img className="mt-[30px] lg:mt-[50px] lg:w-[45%] w-[80%] m-auto" src="/public/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
