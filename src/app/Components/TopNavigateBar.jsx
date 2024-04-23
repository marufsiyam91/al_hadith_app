import { ImBooks } from "react-icons/im";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidDonateHeart } from "react-icons/bi";



const TopNavigateBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <span className="py-[8px] px-[8px] rounded-lg text-2xl border border-[#2B9E76] text-[#2B9E76]"><ImBooks /></span>
          <div>
          <h2 className="text-lg font-semibold">হাদিস সমূহ</h2>
          <p className="text-md">হাদিস পড়ুন শিখুন এবং জানুন</p>
          </div>
        </div>

        <div className="flex gap-4">
          <label className="flex border items-center p-3 border-2 rounded-xl gap-4 bg-slate-200 xl:bg-white">
            <span className="text-xl">
              <IoSearchOutline />
            </span>
            <input type="text" placeholder="Search Hadith" className="max-w-[200px] hidden xl:block"/>
          </label>
          <button className="4xl:flex hidden text-white bg-[#2B9E76] rounded-xl py-2 px-4 items-center gap-2">সাপোর্ট করুন <span className="text-2xl"><BiSolidDonateHeart /></span></button>
          <button></button>
        </div>
    </div>
  )
}

export default TopNavigateBar