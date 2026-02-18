import {useParams} from "react-router-dom";
import Kanji from "../components/Detailroute/Kanji/Kanjirender.jsx";
import {useEffect, useState} from "react";
import KanjiMeanings from "../components/Detailroute/Kanji/KanjiMeanings.jsx";
import Vocab from "../components/Detailroute/Vocab/Vocab.jsx";

export default function DetailsRoute() {
    const {kanji} = useParams();
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchKanji = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`);
                if (!res.ok) throw new Error("Kanji not found");
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (kanji) {
            fetchKanji();
        }
    }, [kanji]);

    if (loading) return <p className="text-white">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="flex flex-col items-center  min-h-screen bg-gray-900 text-white p-4">
                {kanji ? <Kanji character={kanji}/> : <p>No kanji selected</p>}
            {data && (
                <KanjiMeanings props={data}/>
            )}
            <Vocab kanji={kanji}/>
        </div>
    );
}
