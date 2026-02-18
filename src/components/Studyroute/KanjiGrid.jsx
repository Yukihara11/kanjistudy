import { useNavigate } from "react-router-dom";

export default function KanjiGrid({ kanjiList }) {
    const nav = useNavigate();

    if (!kanjiList.length) return <p>No kanji found.</p>;

    return (
        <div className="grid grid-cols-3 md:grid-cols-5 text-5xl md:text-8xl content-center ml-2 mr-2">
            {kanjiList.map((kanji) => (
                <button
                    key={kanji}
                    type="button"
                    className="rounded-2xl border-2 p-20 m-2 hover:text-9xl
                     hover:cursor-pointer hover:bg-red-400 hover:duration-800 ease-linear"
                    onClick={() => nav(`/details/${kanji}`)}
                >
                    {kanji}
                </button>
            ))}
        </div>
    );
}
