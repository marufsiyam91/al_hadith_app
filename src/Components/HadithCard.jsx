'use client'
import {useState, useEffect} from "react";
import getAllHadiths from "../../lib/getAllHadiths";
import getAllSection from "../../lib/getAllSections";
import { BiSolidBookOpen } from "react-icons/bi";
import Section from "@/Components/Section";
import Hadith from "@/Components/Hadit";
import { PiBooksFill } from "react-icons/pi";
import { RiBook3Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import BookBar from "@/Components/BookBar";
import Settingsbar from "@/Components/Settingsbar";
import getAllBooks from "../../lib/getbooks";
import getAllChapters from "../../lib/getAllChapters";
import { BiSolidRightArrow } from "react-icons/bi";




const HadithCard = () => {


    const [hadiths, setHadiths] = useState([]);
    const [sections, setSections] = useState([]);
    const [allHadiths,setAllHadiths] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isOperBookbar, setIsOpenBookbar] = useState(false)
    const [book, setBook] = useState([])
    const [chapter, setChapter] = useState([])

    console.log(allHadiths)

    const handleClose = () => {
        setIsOpenBookbar(false);
    };

    

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

        const fetchBook = async () => {
            setIsLoading(true);
            try{
                const fetchedBook = await getAllBooks()
                setBook(fetchedBook)
            } catch(err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        const fetchChapter = async () => {
            setIsLoading(true);
            try{
                const fetchedChapter = await getAllChapters()
                setChapter(fetchedChapter)
            } catch (err) {
                setError(err)
            } finally{
                setIsLoading(false)
            }
        }

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
        fetchSections();
        fetchBook();
        fetchChapter();
    }, []);


    useEffect(() => {
        const combined = [];
        const minLength = Math.min(sections.length, hadiths.length);

        for (let i = 0; i < minLength; i++) {
            combined.push(sections[i]);
            combined.push(hadiths[i]);
        }
        setAllHadiths(combined);
    }, [sections, hadiths]);

    if (isLoading) {
        return <div className="p-4">Loading books...</div>;
    }

    if (error) {
        return <div className="p-4">Error fetching books: something went wrong</div>;
    }

    return (
        <div className="w-full h-full flex flex-col gap-4  overflow-y-scroll hadithcard_scrollar">

           
                
            

            <div className="w-full h-auto bg-white rounded-xl 2xl:flex flex-col gap-4 ">
                {
                    book && 
                    book.map(book => (

                            

                        <div className="flex flex-col gap-2 " key={book.id}>

                        <div>
                            <div  className="2xl:hidden w-full h-auto p-4 flex items-center gap-4">
                            <div onClick={() => setIsOpenBookbar(true)} className="text-lg xl:text-xl"><GiHamburgerMenu /></div>
                            <h2 className="text-xl">সহিহ বুখারী</h2>
                            </div>
                            </div>

                            <div className="hidden 2xl:flex items-center gap-1 p-4 pb-0">
                            <PiBooksFill className="text-xl text-gray-400"/>
                           <BiSolidRightArrow className="text-sm text-gray-300"/>      
                            <p> {book.book_name}</p>
                            <BiSolidRightArrow className="text-sm text-gray-300"/>
                            <p>{book.id}</p>

                            </div>
                            <div className="hidden 2xl:flex justify-between items-center p-4 pt-6 border-t">
                                <div className="flex items-center gap-4">
                                    <RiBook3Line className="text-[50px] text-[#2B9E76]"/>
                                    <div>
                                        <h3 className="text-2xl font-medium">{book.title}</h3>
                                        <p>সর্বমোট হাদিস {book.number_of_hadis}</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-medium">{book.title_ar}</h2>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="w-full h-auto bg-white rounded-xl 2xl:flex flex-col gap-4 ">
                {
                    chapter.map(schapter => (
                        <div>
                            
                        </div>
                    ))
                }
            </div>


            <div className="2xl:hidden block">
                {isOperBookbar &&
                    (<>
                        <div className="w-full h-[100vh] fixed top-0 left-0 bg-black opacity-50 bookbar-back">

                        </div>
                        <BookBar handleClose={handleClose} />
                    </>)
                }
            </div>

            { allHadiths &&
                allHadiths.map((item, index) => (

                    <>
                        {item.title && <Section key={index} number={item.number} title={item.title} preface={item.preface}/>}
                        {item.narrator && <Hadith key={index} id={item.hadith_id} arabic={item.ar} bangla={item.bn} rabi={item.narrator} grade={item.grade}/>}
                    </>
                ))
            }
        </div>
    )
}

export default HadithCard

// 'use client'
// import { useState } from "react";
// import getAllHadiths from "../../../lib/getAllHadiths";
// import getAllSection from "../../../lib/getAllSections";
// import Section from "@/app/Components/Section";
// import Hadith from "@/app/Components/Hadit";
//
// export async function getStaticProps() {
//     try {
//         const sections = await getAllSection();
//         const hadiths = await getAllHadiths();
//
//         const section = await sections
//
//         const allHadiths = [];
//
//         // Combine sections and hadiths in the desired format
//         for (let i = 0; i < sections.length; i++) {
//             allHadiths.push(sections[i]);
//             // Check if there's a corresponding hadith, and push it if available
//             if (hadiths[i]) {
//                 allHadiths.push(hadiths[i]);
//             }
//         }
//
//         return {
//             props: {
//                 allHadiths,
//                 section
//             },
//         };
//     } catch (error) {
//         return {
//             props: {
//                 error: error.message,
//             },
//         };
//     }
// }
//
// const HadithCard = ({ allHadiths, error, section }) => {
//     const [isLoading, setIsLoading] = useState(false);
//     console.log(section)
//     if (error) {
//         return <div className="p-4">Error fetching data: {error}</div>;
//     }
//
//     return (
//         <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll hadithcard_scrollar">
//             {allHadiths &&
//                 allHadiths.map((item, index) => (
//                     <>
//                         {item.title && <Section key={index} number={item.number} title={item.title} preface={item.preface}/>}
//                         {item.narrator && <Hadith key={index} id={item.hadith_id} arabic={item.ar} bangla={item.bn} rabi={item.narrator} grade={item.grade}/>}
//                     </>
//                 ))}
//         </div>
//     );
// };
//
// export default HadithCard;






//
// 'use client'
// import { useState } from "react";
// import getAllHadiths from "../../../lib/getAllHadiths";
// import getAllSection from "../../../lib/getAllSections";
// import Section from "@/app/Components/Section";
// import Hadith from "@/app/Components/Hadit";
//
// export async function getStaticProps() {
//     try {
//         const sections = await getAllSection();
//         const hadiths = await getAllHadiths();
//
//         const allHadiths = [];
//         const minLength = Math.min(sections.length, hadiths.length);
//
//         for (let i = 0; i < minLength; i++) {
//             allHadiths.push(sections[i]);
//             allHadiths.push(hadiths[i]);
//         }
//
//         return {
//             props: {
//                 allHadiths,
//                 sections
//             },
//         };
//     } catch (error) {
//         return {
//             props: {
//                 error: error.message,
//             },
//         };
//     }
// }
//
// const HadithCard = ({ allHadiths, error, sections }) => {
//     const [isLoading, setIsLoading] = useState(false);
//     console.log(allHadiths)
//     if (error) {
//         return <div className="p-4">Error fetching data: {error}</div>;
//     }
//
//     return (
//         <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll hadithcard_scrollar">
//             {allHadiths &&
//                 allHadiths.map((item, index) => (
//                     <>
//                         {item.title && <Section key={index} number={item.number} title={item.title} preface={item.preface}/>}
//                         {item.narrator && <Hadith key={index} id={item.hadith_id} arabic={item.ar} bangla={item.bn} rabi={item.narrator} grade={item.grade}/>}
//                     </>
//                 ))}
//         </div>
//     );
// };
//
// export default HadithCard;
