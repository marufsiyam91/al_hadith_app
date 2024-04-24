export default async function getAllBooks () {
    const books = await fetch('http://localhost:8800/api/books');

    return books.json();
}