import { IoSearchOutline } from "react-icons/io5";
import Books from './Books';

const BookBar = () => {
  return (
    <div className="w-[370px] h-full rounded-2xl bg-white ">
      <div className="flex justify-between border-b">
        <button className="w-full bg-[#2B9E76] p-6 rounded-tl-2xl font-semibold text-white ">বই</button>
        <button className="w-full bg-[#2B9E76] p-6 rounded-tr-2xl font-semibold text-white">অধ্যায়</button>
      </div>
      <label className="flex items-center p-3 rounded-xl gap-4 bg-slate-100 m-4">
          <span className="text-xl">
            <IoSearchOutline />
          </span>
          <input type="text" placeholder="Search Hadith" className="w-full p-1 bg-slate-100 outline-none hidden xl:block"/>
      </label>

      <Books/>
    </div>
  )
}

export default BookBar