import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import Charts from "./Charts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetails = () => {
  const details = useLoaderData();

  const [install, setInstall] = useState(false);

  // toastify
  const handleClick = () => {
    toast.success(`Yahoo!!!⚡${details.title} installed successfully!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleInstall = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("installations") || "[]");
      const exists = stored.find((item) => item.id === details.id);
      if (!exists) {
        stored.push(details);
        localStorage.setItem("installations", JSON.stringify(stored));
        window.dispatchEvent(new Event("installationsUpdated"));
      }
      setInstall(true);
    } catch (e) {
      console.error("Failed to save installation:", e);
    }

    handleClick();
  };

  useEffect(() => {
    const updateInstalledState = () => {
      try {
        const stored = JSON.parse(localStorage.getItem("installations") || "[]");
        const exists = stored.find((item) => item.id === details.id);
        setInstall(Boolean(exists));
      } catch (e) {
        console.error("Failed to read installations:", e);
      }
    };

    updateInstalledState();

    window.addEventListener("installationsUpdated", updateInstalledState);
    window.addEventListener("storage", updateInstalledState);

    return () => {
      window.removeEventListener("installationsUpdated", updateInstalledState);
      window.removeEventListener("storage", updateInstalledState);
    };
  }, [details.id]);

  const { image, title, companyName, downloads, ratingAvg, reviews, description, size } = details;

  return (
    <div className="app-details">
      <div className="flex lg:flex-row flex-col gap-8 lg:gap-10 h-auto lg:h-[290px]">
        <div className="w-[100%] h-full m-auto lg:w-[270px] bg-white flex justify-center items-center p-4 rounded-md shadow">
          <img src={image} alt="" className="rounded-md" />
        </div>
        {/* app info */}
        <div className="w-full flex flex-col justify-between">
          <h4 className="font-bold lg:text-3xl text-2xl mb-2">{title}</h4>
          <p className="text-sm text-gray-600">
            Developed by <span className="text-[16px] font-bold text-[#7044d5]">{companyName}</span>
          </p>
          <hr className="text-gray-300 my-6" />
          <div className="flex gap-0 lg:justify-start justify-between lg:gap-[80px]">
            <div className="flex flex-col gap-2">
              <img className="w-7" src="/icon-downloads.png" alt="" />
              <p className="text-sm text-gray-600">Downloads</p>
              <p className="text-3xl font-bold">{downloads / 1000000}M</p>
            </div>
            <div className="flex flex-col gap-2">
              <img className="w-7" src="/icon-ratings.png" alt="" />
              <p className="text-sm text-gray-600">Average Ratings</p>
              <p className="text-3xl font-bold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col gap-2">
              <img className="w-7" src="/icon-review.png" alt="" />
              <p className="text-sm text-gray-600">Total Reviews</p>
              <p className="text-3xl font-bold">{reviews / 1000}K</p>
            </div>
          </div>
          {/* install now btn */}
          <button onClick={handleInstall} className="bg-[#0ec289] text-gray-100 px-5  py-1 rounded mt-5 lg:mt-2 self-start cursor-pointer ">
            {install ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>
      <hr className="text-gray-300 my-9" />

      <Charts details={details}></Charts>
      <p className="h-10"></p>
      <hr className="text-gray-300 my-9" />
      <h2 className="text-2xl font-bold">Description</h2>
      <p className="mt-3 text-gray-600">{description}</p>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
