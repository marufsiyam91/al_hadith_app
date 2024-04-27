export default async function getAllBooks () {
    const books = await fetch('http://localhost:8800/api/books', {cache: "force-cache"});

    return books.json();
}