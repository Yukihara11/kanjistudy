interface SearchBarProps {
    setFilteredKanji: (value: string) => void
}

export default function SearchBar({ setFilteredKanji }: SearchBarProps) {
    return (
        <input
            className="border-2 border-solid"
            type="text"
            placeholder="Type in Kanji..."
            onChange={e => setFilteredKanji(e.target.value)}
        />
    )
}
