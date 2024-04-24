"use client";
import { ImBooks } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { useState } from "react";
import Settingsbar from "./Settingsbar";

const TopNavigateBar = () => {
  const [isShowSettings, setIsShowSettings] = useState(false);
  const handleClose = () => {
    setIsShowSettings(false);
  };

  return (
    <div className="flex items-center justify-between p-4 h-[80px]">
      <div className="flex items-center gap-4">
        <span className="py-[8px] px-[8px] rounded-lg text-2xl border border-[#2B9E76] text-[#2B9E76]">
          <ImBooks />
        </span>
        <div>
          <h2 className="text-lg font-semibold font-primaryFont">হাদিস সমূহ</h2>
          <p className="text-md">হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <label className="flex items-center p-3 border-2 rounded-xl gap-4 bg-slate-200 xl:bg-white">
          <span className="text-xl">
            <IoSearchOutline />
          </span>
          <input
            type="text"
            placeholder="Search Hadith"
            className="max-w-[200px] outline-none hidden xl:block"
          />
        </label>
        <button className="4xl:flex hidden text-white bg-[#2B9E76] rounded-xl py-2 px-4 items-center gap-2">
          সাপোর্ট করুন{" "}
          <span className="text-2xl">
            <BiSolidDonateHeart />
          </span>
        </button>
        <button
          onClick={() => setIsShowSettings(true)}
          className="block 4xl:hidden p-3 text-xl bg-[#2B9E76] text-white rounded-lg"
        >
          <IoSettingsSharp />
        </button>

        <div className="4xl:hidden block">
        {isShowSettings && 
        (<>
          <div className="w-full h-[100vh] fixed top-0 left-0 bg-black opacity-30">

          </div>
          <Settingsbar handleClose={handleClose} /> 
        </>)
        }
        </div>
      </div>
    </div>
  );
};

export default TopNavigateBar;
