import { FaClipboard, FaHeart } from "react-icons/fa"
import { toast } from "react-toastify"
import { useState } from "react"

// Define the structure of a variant
interface Variant {
    written?: string
    pronounced?: string
}

// Define the structure of a meaning
interface Meaning {
    glosses: string[]
}

// Define the structure of a word
interface Word {
    variants: Variant[]
    meanings: Meaning[]
}

// Props for VocabCard
interface VocabCardProps {
    word: Word
}

export default function VocabCard({ word }: VocabCardProps) {
    const [liked, setLiked] = useState(false)

    const written = word.variants[0]?.written ?? ""
    const pronounced = word.variants[0]?.pronounced ?? ""

    const handleCopy = async () => {
        await navigator.clipboard.writeText(written)
        toast.success("Copied to clipboard!")
    }

    const handleLike = () => {
        setLiked(!liked)
        toast.info(liked ? "Function not Implemented yet" : "Function not Implemented yet")
    }

    return (
        <div className="mt-3 border-2 rounded-2xl p-5">
            <div className="flex justify-center relative">
                <button onClick={handleCopy}>
                    <FaClipboard className="hover:cursor-pointer" />
                </button>

                <button
                    onClick={handleLike}
                    className={`absolute top-0 right-0 hover:cursor-pointer ${
                        liked ? "text-red-500" : ""
                    }`}
                >
                    <FaHeart />
                </button>

                <h4 className="text-3xl">{written}</h4>
            </div>

            <h5 className="font-mono p-3 font-bold text-[20px]">{pronounced}</h5>

            <ul>
                {word.meanings.map((meaning, i) => (
                    <li key={i}>{meaning.glosses.join(", ")}</li>
                ))}
            </ul>
        </div>
    )
}
