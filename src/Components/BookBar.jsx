'use client'
import { IoSearchOutline } from "react-icons/io5";
import {useState} from 'react'
import Books from './Books';
import Chapters from "@/Components/Chapters";
import getAllSection from "../../lib/getAllSections";
import getAllHadiths from "../../lib/getAllHadiths";
import getAllBooks from "../../lib/getbooks";
import {VscClose} from "react-icons/vsc";

const BookBar = ({handleClose}) => {

  const [showCompo, setShowCompo] = useState(true)
  const bookBtn = showCompo ? 'w-full bg-[#2B9E76] p-4 2xl:rounded-tl-2xl font-semibold text-white' :  'w-full bg-white p-4 2xl:rounded-tl-2xl font-semibold text-[#747474]'
  const chapterBtn = !showCompo ? 'w-full bg-[#2B9E76] p-4 2xl:rounded-tr-2xl font-semibold text-white'  : 'w-full bg-white p-4 2xl:rounded-tr-2xl font-semibold text-[#747474]'



  return (
    <div className="2xl:relative absolute top-0 left-0 w-full sm:w-[370px] h-full  2xl:rounded-2xl bg-white slidefromLeft">
      <div className="block 2xl:hidden flex py-8 px-4 justify-between">
          <h3 className="text-2xl">ক্যাটাগরি</h3>
          <button onClick={() => handleClose()} className="block 4xl:hidden text-2xl"><VscClose /></button>
      </div>
      <div className="flex justify-between border-t 2xl:border-t-0 border-b">
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


