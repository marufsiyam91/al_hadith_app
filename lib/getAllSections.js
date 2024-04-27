export default async function getAllSection () {
    const sections = await fetch('http://localhost:8800/api/sections', {cache: "force-cache"});

    return sections.json();
}