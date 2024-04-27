'use client'
import {useEffect, useState} from "react";
import getAllChapters from "../../lib/getAllChapters";
import { TbHexagonFilled } from "react-icons/tb";


const Chapters = () => {

    const [chapters, setChapters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const fetchedBooks = await getAllChapters();
                setChapters(fetchedBooks);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Display loading message or error message if necessary
    if (isLoading) {
        return <div className="p-4">Loading chapters...</div>;
    }

    if (error) {
        return <div className="p-4">Error fetching books: something went wrong</div>;
    }

    return (
        <div className="px-4 bg-white">
            {
                chapters.map(chapter => (
                    <div className="flex items-center gap-2 bg-green-50 px-4 py-6 rounded-xl" key={chapter.id}>
                        <div className="relative w-[3.2rem]">
                            <TbHexagonFilled  className="text-[#2B9E76] text-[3.2rem]"/>
                            <h3 className="text-white font-medium text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">{chapter.number}</h3>
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-lg font-medium">{chapter.title}</h3>
                            <p>হাদিসের রেঞ্জ - {chapter.hadis_range}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Chapters