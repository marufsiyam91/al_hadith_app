export default async function getAllChapters () {
    const chapters = await fetch('http://localhost:8800/api/chapters', {cache: "force-cache"});

    return chapters.json();
}