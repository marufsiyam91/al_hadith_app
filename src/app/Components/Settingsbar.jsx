'use client'
import Sadaqah from './Sadaqah'
import Settings from './Settings'



const Settingsbar = ({handleClose}) => {
  return (
    <div className="fixed top-0 right-0 4xl:relative w-[370px] h-full  4xl:rounded-2xl flex flex-col gap-8 bg-white 4xl:bg-transparent">
        <Settings handleClose={handleClose}/>
        <Sadaqah/>
    </div>
  )
}

export default Settingsbar