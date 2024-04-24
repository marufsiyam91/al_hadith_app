import BookBar from "./Components/BookBar";
import SideNav from "./Components/SideNav";
import TopNavigateBar from "./Components/TopNavigateBar";
import HadithCard from './Components/HadithCard';
import Settingsbar from "./Components/Settingsbar";

export default function Home() {
  return (
    <main className="h-[100vh] w-full bg-white overflow-hidden">
      <TopNavigateBar/>
      <div className="flex xl:flex-row flex-col-reverse justify-evenly h-full">
        <div >
          <SideNav/>
        </div>
        <div className="w-full rounded-tl-[30px] bg-[#F2F4F6] flex gap-4 p-4">
          <div className="2xl:block hidden">
            <BookBar/>
          </div>
          <div className="w-full">
            <HadithCard/>
          </div>
          <div className="4xl:block hidden">
            <Settingsbar/>
          </div>
        </div>
      </div>
    </main>
  );
}
