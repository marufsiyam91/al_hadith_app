'use client'
import { useState, useEffect } from 'react';
import getAllBooks from "../../../lib/getbooks";

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
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div>Error fetching books: {error.message}</div>;
  }

  // Display books if successfully fetched
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <div id="polygon">
            {book.abvr_code}
          </div>
          <h3>{book.title}</h3>
          <p>সর্বমোট হাদিস - {book.number_of_hadis}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
