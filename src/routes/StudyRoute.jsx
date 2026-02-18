import KanjiGrid from "../components/Studyroute/KanjiGrid.jsx";
import SearchBar from "../components/Studyroute/Filter/SearchBar.jsx";
import FilterDropdown from "../components/Studyroute/Filter/FilterDropdown.jsx";
import useKanjiData from "../hooks/useKanjiData.jsx";
import Pagination from "../hooks/Pagination.jsx";

export default function StudyRoute() {
    const {
        paginatedData,
        totalPages,
        currentPage,
        setCurrentPage,
        setCurrentLevelState,
        setSearchState
    } = useKanjiData();


    return (
        <div>
            <div className="flex flex-row justify-center g-2">
                <SearchBar setFilteredKanji={setSearchState} />
                <FilterDropdown setSelectedLevel={setCurrentLevelState} />
            </div>

            <KanjiGrid kanjiList={paginatedData} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}/>
        </div>
    );
}
