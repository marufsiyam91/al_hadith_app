'use client'
import { VscClose } from "react-icons/vsc";

const Settings = ({handleClose}) => {
  return (
    <div className="w-full bg-white rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-center mb-4 text-3xl 4xl:txt-2xl">সেটিংস</h3>
        <button onClick={() => handleClose()} className="block 4xl:hidden text-2xl"><VscClose /></button>
      </div>
        <p className="mb-2">আরবি ফন্ট সিলেক্ট করুন</p>
        <select className="w-full p-3 rounded-xl border " name="destination" id="destination">
            <option value="KFGQ">KFGQ</option>
            <option value="Me Quran">Me Quran</option>
            <option value="Al Mushaf">Al Mushaf</option>
            <option value="Amiri">Amiri</option>
            <option value="Arial">Arial</option>
          </select>

          <p className="my-2">এরাবিক ফন্ট সাইজ</p>
          <input className="w-full h-[8px] appearance-none bg-[#EEEEEE] rounded-xl accent-[#2B9E76] range overflow-hidden" type="range" name="font-size"  min={18} max={40} id="" />

          <p lassName="my-2">অনুবাদ ফন্ট সাইজ</p>
          <input className="w-full h-[8px]  appearance-none bg-[#EEEEEE] rounded-xl accent-[#2B9E76] range overflow-hidden" type="range" name="font-size"  min={14} max={25} id="" />
        <div className="flex items-center  justify-between mt-4">
            <p>নাইট মোড</p>
            <button className="border p-[1px] w-10 flex-flex-start rounded-2xl bg-gray-200">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </button>
        </div>
    </div>
  )
}

export default Settings