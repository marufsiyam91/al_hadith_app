export default async function getAllHadiths () {
    const hadiths = await fetch('https://al-hadith-backend-1.onrender.com/api/hadiths', {cache: "force-cache"});

    return hadiths.json();
}