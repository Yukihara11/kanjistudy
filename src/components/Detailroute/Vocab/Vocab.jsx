import {useEffect, useMemo, useState} from "react";
import {fetchKanjiWords} from "../../../hooks/kanjiService.jsx";
import VocabCard from "./VocabCard.jsx";
import SearchInput from "./SearchInput.jsx";

export default function Vocab({kanji}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true)
                const words = await fetchKanjiWords(kanji)
                setData(words)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        if (kanji) loadData()
    }, [kanji]);

    const filteredData = useMemo(() => {

        if (!searchTerm) return data

        return data.filter((word) => {
            const written = word.variants[0]?.written || "";
            const pronounced = word.variants[0]?.pronounced || "";


            return (
                written.includes(searchTerm) ||
                pronounced.includes(searchTerm)
            )
        })
    }, [data, searchTerm])
    return (
        <div className="text-center mt-5">
            <button
                onClick={() => setShow(!show)}
                className="border-2 p-2 hover:bg-pink-400"
            >
                {show ? "Hide Vocabulary" : "Show Vocabulary"}
            </button>

            {show && (
                <>
                    <SearchInput
                        value={searchTerm}
                        onChange={setSearchTerm}
                    />

                    {loading && <p>Loading...</p>}

                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {[...filteredData].reverse().map((word, index) => (
                            <VocabCard key={`${word.variants[0]?.written}-${index}`} word={word} />
                        ))}
                    </div>

                    {!loading && filteredData.length === 0 && (
                        <p className="mt-4 text-gray-500">
                            No results found.
                        </p>
                    )}
                </>
            )}
        </div>

    )
}