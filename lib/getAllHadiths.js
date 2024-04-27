export default async function getAllHadiths () {
    const hadiths = await fetch('http://localhost:8800/api/hadiths', {cache: "force-cache"});

    return hadiths.json();
}