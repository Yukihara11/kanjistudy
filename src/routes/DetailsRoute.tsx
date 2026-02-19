import { useParams } from "react-router-dom"
import Kanji from "../components/Detailroute/Kanji/Kanjirender.js"
import { useEffect, useState } from "react"
import KanjiMeanings from "../components/Detailroute/Kanji/KanjiMeanings.js"
import Vocab from "../components/Detailroute/Vocab/Vocab.js"

interface KanjiDetail {
    meanings?: string[]
    jlpt?: string
    kun_readings?: string[]
    on_readings?: string[]
    name_readings?: string[]
}

export default function DetailsRoute() {
    const { kanji } = useParams<{ kanji: string }>()
    const [data, setData] = useState<KanjiDetail | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchKanji = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`)
                if (!res.ok) throw new Error("Kanji not found")
                const json: KanjiDetail = await res.json()
                setData(json)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                } else {
                    setError("Unknown error")
                }
            } finally {
                setLoading(false)
            }
        }

        if (kanji) {
            fetchKanji()
        }
    }, [kanji])

    if (loading) return <p className="text-white">Loading...</p>
    if (error) return <p className="text-red-500">Error: {error}</p>

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
            {kanji ? <Kanji character={kanji} /> : <p>No kanji selected</p>}
            {data && <KanjiMeanings {...data} />}
            {kanji && <Vocab kanji={kanji} />}
        </div>
    )
}
