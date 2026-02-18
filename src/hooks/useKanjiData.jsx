import {useState, useEffect} from "react";

export default function useKanjiData() {
    const [levelData, setLevelData] = useState({})
    const [currentLevel, setCurrentLevel] = useState("jouyou")
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 25;

    function setSearchState(value) {
        setSearch(value);
        setCurrentPage(1);
    }

    function setCurrentLevelState(value) {
        setCurrentLevel(value);
        setCurrentPage(1);
    }


    useEffect(() => {
        if (levelData[currentLevel]) return

        const fetchKanji = async () => {
            let endpoint;

            switch (currentLevel) {
                case "N5":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-5";
                    break;
                case "N4":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-4";
                    break;
                case "N3":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-3";
                    break;
                case "N2":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-2";
                    break;
                case "N1":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-1";
                    break;
                default:
                    endpoint = "https://kanjiapi.dev/v1/kanji/jouyou";
                    break;
            }

            const res = await fetch(endpoint)
            const data = await res.json()

            setLevelData(prev => ({...prev, [currentLevel]: data}))
        }

        fetchKanji()
    }, [currentLevel]);

    const currentData = levelData[currentLevel] || []
    const filteredData = currentData.filter(kanji =>
        kanji.includes(search)
    )

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)

    const startIndex = (currentPage-1) * itemsPerPage
    const paginatedData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage)

    return{
        paginatedData,
        setCurrentLevelState,
        setSearchState,
        totalPages,
        currentPage,
        setCurrentPage
    }
}