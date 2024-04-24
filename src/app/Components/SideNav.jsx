import { HiMiniHome } from "react-icons/hi2";
import { ImBooks } from "react-icons/im";
import { IoBook } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";






const SideNav = () => {
  return (
    <nav className="flex items-center h-[80px] xl:h-[calc(100vh-80px)] w-full xl:w-auto px-6 bg-white">
        <ul className="flex flex-row xl:flex-col w-full h-[80px] xl:h-[70%] justify-between">
            <li className="text-4xl text-slate-400 font-sm"><HiMiniHome /></li>
            <li className="text-4xl text-slate-400 font-sm"><ImBooks /></li>
            <li className="text-4xl text-slate-400 font-sm"><IoBook /></li>
            <li className="text-4xl text-slate-400 font-sm"><IoBookmark /></li>
            <li className="text-4xl text-slate-400 font-sm"><BiSolidMessageSquareDots /></li>
            <li className="text-4xl text-slate-400 font-sm"><FaPaperPlane /></li>
        </ul>
    </nav>
  )
}

export default SideNav