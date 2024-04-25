'use client'
import {useState, useEffect} from "react";
import getAllHadiths from "../../../lib/getAllHadiths";
import getAllSection from "../../../lib/getAllSections";
import { BiSolidBookOpen } from "react-icons/bi";
import Section from "@/app/Components/Section";
import Hadith from "@/app/Components/Hadit";



const HadithCard = () => {

  const [hadiths, setHadiths] = useState([]);
  const [sections, setSections] = useState([]);
  const [allHadiths,setAllHadiths] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(allHadiths)



  useEffect(() => {
    const fetchHadiths = async () => {
      setIsLoading(true);
      try {
        const fetchedBooks = await getAllHadiths();
        setHadiths(fetchedBooks);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchSections = async () => {
      setIsLoading(true);
      try {
        const fetchedBooks = await getAllSection();
        setSections(fetchedBooks);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHadiths();
    fetchSections()
  }, []);


  useEffect(() => {
    // Combine data from both APIs
    const combined = [];
    const minLength = Math.min(sections.length, hadiths.length);

    for (let i = 0; i < minLength; i++) {
      combined.push(sections[i]);
      combined.push(hadiths[i]);
    }
    setAllHadiths(combined);
  }, [sections, hadiths]);

  // Display loading message or error message if necessary
  if (isLoading) {
    return <div className="p-4">Loading books...</div>;
  }

  if (error) {
    return <div className="p-4">Error fetching books: something went wrong</div>;
  }

  return (
    <div className="w-full h-full flex flex-col gap-4  overflow-y-scroll hadithcard_scrollar">

      {
        allHadiths.map((item, index) => (

            <>
              {item.title && <Section key={index} number={item.number} title={item.title} preface={item.preface}/>}
              {item.narrator && <Hadith key={index} id={item.hadith_id} arabic={item.ar} bangla={item.bn} rabi={item.narrator} grade={item.grade}/>}
            </>


            // <div key={index}>
            //   <div className="w-full h-auto bg-white p-4 rounded-xl flex flex-col gap-4">
            //     <div className="flex items center gap-2">
            //       <BiSolidBookOpen className="text-3xl text-[#2B9E76]"/>
            //       <h4 className="text-lg">{item.number}</h4>
            //     </div>
            //     <p>{item.title}</p>
            //     {
            //       item.preface && <p className="border-t pt-4">{item.preface}</p>
            //     }
            //   </div>
            // </div>
        ))
      }
    </div>
  )
}

export default HadithCard