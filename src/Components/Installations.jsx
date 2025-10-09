import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Installations = () => {
  const [installedList, setInstalledList] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("installations") || "[]");
      setInstalledList(stored);
    } catch (e) {
      console.error("Failed to read installations from localStorage:", e);
    }
  }, []);

  const handleUninstall = (id) => {
    try {
      const stored = JSON.parse(localStorage.getItem("installations") || "[]");
      const updated = stored.filter((item) => item.id !== id);
      localStorage.setItem("installations", JSON.stringify(updated));
      setInstalledList(updated);
      window.dispatchEvent(new Event("installationsUpdated"));
    } catch (e) {
      console.error("Failed to remove installation:", e);
    }
  };

  return (
    <div className="installations">
      <h2 className="text-3xl font-bold text-center pt-[30px] text-gray-700">Your Installed Apps</h2>
      <p className="text-center text-gray-600 pt-2 pb-10">Explore All Trending Apps on the Market developed by us</p>
      {installedList.length ? (
        <div className="grid grid-cols-1 rounded gap-3 ">
          {installedList.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 bg-white p-3 rounded">
              <div className="flex gap-4">
                <div className="w-[80px] bg-white border border-gray-300 flex justify-center items-center p-3 rounded-md ">
                  <img src={item.image} alt="" className="rounded-md" />
                </div>
                <div className=" flex flex-col justify-between py-2">
                  <h2 className="font-semibold">{item.title}</h2>
                  <div className="flex gap-5">
                    <div className="flex gap-1 items-center">
                      <img className="w-3 h-3" src="/public/icon-downloads.png" alt="" />
                      <span className="text-xs text-[#0ec289] font-bold">{item.downloads / 1000000}M</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <img className="w-3 h-3" src="/icon-ratings.png" alt="" />
                      <span className="text-xs text-[#ff8401] font-bold"> {item.ratingAvg}</span>
                    </div>
                    <p className="text-xs text-gray-500 ">{item.size} MB</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#0ec289] text-gray-100 px-5  py-1 rounded mt-2 self-start cursor-pointer " onClick={() => handleUninstall(item.id)}>
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center bg-white p-10 rounded text-gray-600">
          <i className="fa-solid fa-triangle-exclamation text-9xl mb-7"></i>
          <p className="text-gray-500">
            No apps installed yet! <br /> Visit the app page to explore and install your favorites.
          </p>
          <Link to="/app" className="m-auto">
            <button className="btn2" style={{ padding: "6px 26px" }}>
              Explore
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Installations;
