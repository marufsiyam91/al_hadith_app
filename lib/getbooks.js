export default async function getAllBooks () {
    const books = await fetch('https://al-hadith-backend-1.onrender.com/api/books', {cache: "force-cache"});

    return books.json();
}