import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Installations = () => {
  const [installedList, setInstalledList] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("installations") || "[]");
      setInstalledList(stored);
    } catch (e) {
      console.error("Failed to read installations from localStorage:", e);
    }
  }, []);

  useEffect(() => {
    let list = [...installedList];
    if (sortOption === "Low - High") {
      list.sort((a, b) => (a.size || 0) - (b.size || 0));
    } else if (sortOption === "High - Low") {
      list.sort((a, b) => (b.size || 0) - (a.size || 0));
    }
    setDisplayList(list);
  }, [installedList, sortOption]);

  // react toastify
  const handleClick = (title) => {
    toast.success(`${title} successfully uninstalled from your device`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleUninstall = (id, title) => {
    try {
      const stored = JSON.parse(localStorage.getItem("installations") || "[]");
      const updated = stored.filter((item) => item.id !== id);
      localStorage.setItem("installations", JSON.stringify(updated));
      setInstalledList(updated);
      window.dispatchEvent(new Event("installationsUpdated"));
    } catch (e) {
      console.error("Failed to remove installation:", e);
    }

    handleClick(title);
  };

  return (
    <div className="installations min-h-[80vh]">
      <h2 className="text-3xl font-bold text-center pt-[30px] text-gray-700">Your Installed Apps</h2>
      <p className="text-center text-gray-600 pt-2 pb-0 lg:pb-10">Explore All Trending Apps on the Market developed by us</p>

      <div className="flex justify-between items-center my-5 lg:my-9 ">
        <p className="font-bold text-xl"> ({installedList.length}) Apps Found</p>

        <fieldset className="fieldset w-[200px]">
          <select value={sortOption} className="select" onChange={(e) => setSortOption(e.target.value)}>
            <option value="" disabled>
              Sort By Size
            </option>
            <option value="Low - High">Low - High</option>
            <option value="High - Low">High - Low</option>
            <option value="Default">Default</option>
          </select>
        </fieldset>
      </div>

      {displayList.length ? (
        <div className="grid grid-cols-1 rounded gap-3 ">
          {displayList.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 bg-white p-3 rounded">
              <div className="flex gap-4">
                <div className="w-[80px] bg-white border border-gray-300 flex justify-center items-center p-3 rounded-md ">
                  <img src={item.image} alt="" className="rounded-md" />
                </div>
                <div className=" flex flex-col justify-between py-2">
                  <h2 className="font-semibold">{item.title}</h2>
                  <div className="flex gap-4 lg:gap-5 items-center">
                    <div className="flex gap-1 items-center">
                      <img className="w-3 h-3" src="/icon-downloads.png" alt="" />
                      <span className="text-xs text-[#0ec289] font-bold">{item.downloads / 1000000}M</span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <img className="w-3 h-3" src="/icon-ratings.png" alt="" />
                      <span className="text-xs text-[#ff8401] font-bold mt-0.5"> {item.ratingAvg}</span>
                    </div>
                    <p className="text-xs mt-0.5 text-gray-500 ">{item.size} MB</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="bg-[#0ec289] text-gray-100 px-5  py-1 rounded mt-2 self-start cursor-pointer " onClick={() => handleUninstall(item.id, item.title)}>
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
      <ToastContainer />
    </div>
  );
};

export default Installations;
