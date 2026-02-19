import { useEffect, useMemo, useState } from "react";
import { fetchKanjiWords, Word } from "../../../hooks/kanjiService"

import VocabCard from "./VocabCard";
import SearchInput from "./SearchInput";

interface Variant {
    written?: string;
    pronounced?: string;
}

interface VocabProps {
    kanji: string;
}

export default function Vocab({ kanji }: VocabProps) {
    const [data, setData] = useState<Word[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const words: Word[] = await fetchKanjiWords(kanji);
                setData(words);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (kanji) loadData();
    }, [kanji]);

    const filteredData = useMemo(() => {
        if (!searchTerm) return data;

        return data.filter((word) => {
            const written = word.variants[0]?.written || "";
            const pronounced = word.variants[0]?.pronounced || "";

            return written.includes(searchTerm) || pronounced.includes(searchTerm);
        });
    }, [data, searchTerm]);

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
                    <SearchInput value={searchTerm} onChange={setSearchTerm} />

                    {loading && <p>Loading...</p>}

                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {[...filteredData]
                            .reverse()
                            .map((word, index) => (
                                <VocabCard
                                    key={`${word.variants[0]?.written ?? "unknown"}-${index}`}
                                    word={word}
                                />
                            ))}
                    </div>

                    {!loading && filteredData.length === 0 && (
                        <p className="mt-4 text-gray-500">No results found.</p>
                    )}
                </>
            )}
        </div>
    );
}
