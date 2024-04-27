'use client'
import Sadaqah from './Sadaqah'
import Settings from './Settings'



const Settingsbar = ({handleClose, }) => {


  return (
    <div className="fixed z-20 top-0 right-0 4xl:relative w-full sm:w-[50%] md:w-[400px] xl:w-[380px] 2xl:w-[340px] h-full  4xl:rounded-2xl flex flex-col gap-8 bg-white 4xl:bg-transparent settingbarAppear">
        <Settings handleClose={handleClose}/>
        <Sadaqah/>
    </div>
  )
}

export default Settingsbar