export default async function getAllChapters () {
    const chapters = await fetch('https://al-hadith-backend-1.onrender.com/api/chapters', {cache: "force-cache"});

    return chapters.json();
}