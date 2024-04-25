'use client'
import { IoSearchOutline } from "react-icons/io5";
import {useState} from 'react'
import Books from './Books';
import Chapters from "@/app/Components/Chapters";

const BookBar = () => {

  const [showCompo, setShowCompo] = useState(true)
  const bookBtn = showCompo ? 'w-full bg-[#2B9E76] p-4 rounded-tl-2xl font-semibold text-white' :  'w-full bg-white p-4 rounded-tl-2xl font-semibold text-[#747474]'
  const chapterBtn = !showCompo ? 'w-full bg-[#2B9E76] p-4 rounded-tr-2xl font-semibold text-white'  : 'w-full bg-white p-4 rounded-tr-2xl font-semibold text-[#747474]'



  return (
    <div className="w-[370px] h-full rounded-2xl bg-white ">
      <div className="flex justify-between border-b">
        <button onClick={() => setShowCompo(true)} className={bookBtn}>বই</button>
        <button onClick={() => setShowCompo(false)} className={chapterBtn}>অধ্যায়</button>
      </div>
      <label className="flex items-center p-3 rounded-xl gap-4 bg-slate-100 m-4">
          <span className="text-xl">
            <IoSearchOutline />
          </span>
          <input type="text" placeholder="Search Hadith" className="w-full p-1 bg-slate-100 outline-none hidden xl:block"/>
      </label>

        {
            showCompo ?
                <Books/>
                :
                <Chapters/>
        }

    </div>
  )
}

export default BookBar