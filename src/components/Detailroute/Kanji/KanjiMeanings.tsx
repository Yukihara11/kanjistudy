interface KanjiMeaningsProps {
    meanings?: string[]
    jlpt?: string
    kun_readings?: string[]
    on_readings?: string[]
    name_readings?: string[]
}

export default function KanjiMeanings(props: KanjiMeaningsProps) {
    return (
        <div className="text-center mt-3 font-mono">
            <p className="pb-2">
                <strong className="pr-2 text-[20px]">Meaning:</strong> {props.meanings?.join(", ") || "Help"}
            </p>
            <p className="pb-2">
                <strong className="pr-2 text-[20px]">JLPT:</strong> {props.jlpt || "Help"}
            </p>
            <p className="pb-2">
                <strong className="pr-2 text-[20px]">Kun readings:</strong> {props.kun_readings?.join(", ") || "Help"}
            </p>
            <p className="pb-2">
                <strong className="pr-2 text-[20px]">On readings:</strong> {props.on_readings?.join(", ") || "Help"}
            </p>
            <p className="pb-2">
                <strong className="pr-2 text-[20px]">Name Readings:</strong> {props.name_readings?.join(", ") || "No Readings"}
            </p>
        </div>
    )
}
