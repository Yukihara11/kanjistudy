import KanjiGrid from "../components/Studyroute/KanjiGrid"
import SearchBar from "../components/Studyroute/Filter/SearchBar"
import FilterDropdown from "../components/Studyroute/Filter/FilterDropdown"
import useKanjiData from "../hooks/useKanjiData"
import Pagination from "../hooks/Pagination"
import type { LevelKey } from "../hooks/useKanjiData"

interface FilterDropdownProps {
    setSelectedLevel: (level: LevelKey) => void
}

export default function StudyRoute() {
    const {
        paginatedData,
        totalPages,
        currentPage,
        setCurrentPage,
        setCurrentLevelState,
        setSearchState
    } = useKanjiData()

    return (
        <div>
            <div className="flex flex-row justify-center g-2 mb-3">
                <SearchBar setFilteredKanji={setSearchState} />
                <FilterDropdown setSelectedLevel={setCurrentLevelState} />
            </div>

            <KanjiGrid kanjiList={paginatedData} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
