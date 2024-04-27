import { HiMiniHome } from "react-icons/hi2";
import { ImBooks } from "react-icons/im";
import { IoBook } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";






const SideNav = () => {
  return (
    <nav className="flex items-center h-[60px] xl:h-[calc(100vh-80px)] w-full xl:w-auto px-4 bg-white">
        <ul className="flex justify-between sm:justify-around flex-row xl:flex-col w-full xl:h-[60%] xl:justify-between">
            <li className="text-2xl xl:text-4xl text-slate-400 font-sm p-3 hover:bg-slate-100 hover:text-[#2B9E76] rounded-lg dutation-300 transition"><HiMiniHome /></li>
            <li className="text-2xl xl:text-4xl text-slate-100 font-sm p-3 hover:bg-slate-100 hover:text-[#2B9E76] rounded-lg dutation-300 transition bg-[#2B9E76]"><ImBooks /></li>
            <li className="text-2xl xl:text-4xl text-slate-400 font-sm p-3 hover:bg-slate-100 hover:text-[#2B9E76] rounded-lg dutation-300 transition"><IoBook /></li>
            <li className="text-2xl xl:text-4xl text-slate-400 font-sm p-3 hover:bg-slate-100 hover:text-[#2B9E76] rounded-lg dutation-300 transition"><IoBookmark /></li>
            <li className="hidden xl:block xl:text-4xl text-slate-400 font-sm p-3 hover:bg-slate-100 hover:text-[#2B9E76] rounded-lg dutation-300 transition"><BiSolidMessageSquareDots /></li>
            <li className="text-2xl xl:text-4xl text-slate-400 font-sm p-3 hover:bg-slate-100 hover:text-[#2B9E76] rounded-lg dutation-300 transition"><FaPaperPlane /></li>
        </ul>
    </nav>
  )
}

export default SideNav