'use client'
import { useState, useEffect } from 'react';
import getAllBooks from "../../../lib/getbooks";
import { TbHexagonFilled } from "react-icons/tb";




const Books = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedBooks = await getAllBooks();
        setBooks(fetchedBooks);
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
    return <div className="p-4">Loading books...</div>;
  }

  if (error) {
    return <div className="p-4">Error fetching books: something went wrong</div>;
  }

  // Display books if successfully fetched
  return (
    <div className="px-4">
      {books.map((book) => (
        <div className="flex items-center gap-2 bg-green-50 px-4 py-6 rounded-xl" key={book.id}>
          <div className="relative w-[3.2rem]">
            <TbHexagonFilled className="text-[#2B9E76] text-[3.2rem]"/>
            <h3 className="text-white font-medium text-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">{book.abvr_code}</h3>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-medium">{book.title}</h3>
            <p>সর্বমোট হাদিস - {book.number_of_hadis}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Books;
