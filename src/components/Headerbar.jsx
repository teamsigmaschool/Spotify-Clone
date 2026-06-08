import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Headerbar = () => {
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isBrowseActive, setIsBrowseActive] = useState(false);
  const [isBrowseHovered, setIsBrowseHovered] = useState(false);
  const [isNewsActive, setIsNewsActive] = useState(false);
  const [isNewsHovered, setIsNewsHovered] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isSearchHovered, setIsSearchHovered] = useState(false);

  const navigate = useNavigate();

  const toggleBrowseActive = () => {
    setIsBrowseActive(!isBrowseActive);
  }

  const toggleNewsActive = () => {
    setIsNewsActive(!isNewsActive);
  }

  return (
    <div className="w-full pt-2 px-2 flex items-center justify-between">
      <button className="w-8 h-8 ml-2 sm:ml-5">
        <img src={assets.spotify_logo} alt="" onClick={() => navigate("/")} />
      </button>

      <div className=" ml-[20%] hidden md:flex items-center space-x-4 lg:space-x-2">
        <button
          className="w-12 h-12 bg-[#1F1F1F] rounded-full overflow-hidden relative hover:scale-110"
          onClick={() => navigate("/")}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={isHomeActive ? assets.home_icon_white : assets.home_icon}
              alt=""
              className={`w-7 h-7 ${
                isHomeActive ? "opacity-100" : "opacity-50"
              }`}
            />
          </div>
        </button>

        <div
          className="relative flex items-center"
          onMouseEnter={() => setIsSearchHovered(true)}
          onMouseLeave={() => setIsSearchHovered(false)}
        >
          <img
            src={assets.search_icon}
            alt=""
            className={`w-6 h-6 absolute left-3 pointer-events-none ${
              isSearchFocused || isSearchHovered ? "opacity-100" : "opacity-50"
            }`}
          />
          <input
            className="pl-12 pr-3 py-2 border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white rounded-full bg-[#1F1F1F] text-white placeholder-gray-400 w-[70vw] md:w-[40vw] lg:w-[30vw] h-10 md:h-12 transition-all duration-100 hover:bg-[#282827]"
            type="text"
            placeholder="What do you want to play?"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          <div className="absolute right-12 w-px h-6 bg-gray-600"></div>
          <button
            className="absolute right-3 flex items-center justify-center hover:scale-110"
            onClick={toggleBrowseActive}
            onMouseEnter={() => setIsBrowseHovered(true)}
            onMouseLeave={() => setIsBrowseHovered(false)}
          >
            <img
              src={
                isBrowseActive ? assets.browse_icon_white : assets.browse_icon
              }
              alt=""
              className={`w-6 h-6 ${
                isBrowseActive || isBrowseHovered ? "opacity-100" : "opacity-50"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-6">
        <button className="bg-white px-3 pt-1 pb-1.5 rounded-full font-bold text-sm text-center h-8 hover:scale-110 hover:bg-gray-200">
          Explore Premium
        </button>
        <button className="text-white text-sm font-bold flex items-center justify-center hover:scale-110">
          <img src={assets.download_icon} alt="" className="w-5 h-5" />
          <span className="ml-1 hover:underline decoration-gray-500">
            Install App
          </span>
        </button>
        <button
          className="flex items-center justify-center hover:scale-110"
          onClick={toggleNewsActive}
          onMouseEnter={() => setIsNewsHovered(true)}
          onMouseLeave={() => setIsNewsHovered(false)}
        >
          <img
            src={isNewsActive ? assets.bell_icon_white : assets.bell_icon}
            alt=""
            className={`w-5 h-5 ${
              isNewsActive || isNewsHovered ? "opacity-100" : "opacity-50"
            }`}
          />
        </button>
        <div className="ml-5 bg-[#1F1F1F] rounded-full flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:scale-110">
          <button className="bg-[#19E68C] rounded-full w-8 h-8 font-bold">
            J
          </button>
        </div>
      </div>
    </div>
  );
};
  
export default Headerbar;
