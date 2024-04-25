export default async function getAllSection () {
    const sections = await fetch('http://localhost:8800/api/sections');

    return sections.json();
}