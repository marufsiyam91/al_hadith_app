export default async function getAllSection () {
    const sections = await fetch('https://al-hadith-backend-1.onrender.com/api/sections', {cache: "force-cache"});

    return sections.json();
}