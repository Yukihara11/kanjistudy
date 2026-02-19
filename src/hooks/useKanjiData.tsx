import { useState, useEffect } from "react"

export type LevelKey = "jouyou" | "N5" | "N4" | "N3" | "N2" | "N1"

interface KanjiData {
    [level: string]: string[]
}

interface UseKanjiDataReturn {
    paginatedData: string[]
    setCurrentLevelState: (level: LevelKey) => void
    setSearchState: (value: string) => void
    totalPages: number
    currentPage: number
    setCurrentPage: (value: number | ((prev: number) => number)) => void
}

export default function useKanjiData(): UseKanjiDataReturn {
    const [levelData, setLevelData] = useState<KanjiData>({})
    const [currentLevel, setCurrentLevel] = useState<LevelKey>("jouyou")
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 25

    function setSearchState(value: string) {
        setSearch(value)
        setCurrentPage(1)
    }

    function setCurrentLevelState(level: LevelKey) {
        setCurrentLevel(level)
        setCurrentPage(1)
    }

    useEffect(() => {
        if (levelData[currentLevel]) return

        const fetchKanji = async () => {
            let endpoint: string

            switch (currentLevel) {
                case "N5":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-5"
                    break
                case "N4":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-4"
                    break
                case "N3":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-3"
                    break
                case "N2":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-2"
                    break
                case "N1":
                    endpoint = "https://kanjiapi.dev/v1/kanji/jlpt-1"
                    break
                default:
                    endpoint = "https://kanjiapi.dev/v1/kanji/jouyou"
                    break
            }

            const res = await fetch(endpoint)
            const data: string[] = await res.json()

            setLevelData(prev => ({ ...prev, [currentLevel]: data }))
        }

        fetchKanji()
    }, [currentLevel, levelData])

    const currentData = levelData[currentLevel] || []
    const filteredData = currentData.filter(kanji =>
        kanji.includes(search)
    )

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedData = filteredData.slice(
        startIndex,
        startIndex + itemsPerPage
    )

    return {
        paginatedData,
        setCurrentLevelState,
        setSearchState,
        totalPages,
        currentPage,
        setCurrentPage
    }
}
