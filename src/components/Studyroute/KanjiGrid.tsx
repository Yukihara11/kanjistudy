import { useNavigate } from "react-router-dom"

interface KanjiGridProps {
    kanjiList: string[]
}

export default function KanjiGrid({ kanjiList }: KanjiGridProps) {
    const nav = useNavigate()

    if (!kanjiList.length) return <p className="text-center mt-4">No kanji found.</p>

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2 text-center">
            {kanjiList.map(kanji => (
                <button
                    key={kanji}
                    type="button"
                    className="rounded-2xl border-2 p-6 sm:p-8 md:p-10 lg:p-12 max-w-full hover:scale-105 hover:bg-red-400 transition-transform duration-300 ease-in-out text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                    onClick={() => nav(`/details/${kanji}`)}
                >
                    {kanji}
                </button>
            ))}
        </div>
    )
}
