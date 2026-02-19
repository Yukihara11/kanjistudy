import type {LevelKey} from "../../../hooks/useKanjiData";

interface Level {
    id: number
    value: string
    text: string
}

const levels: Level[] = [
    { id: 1, value: "jouyou", text: "Jouyou" },
    { id: 2, value: "N5", text: "JLPT N5" },
    { id: 3, value: "N4", text: "JLPT N4" },
    { id: 4, value: "N3", text: "JLPT N3" },
    { id: 5, value: "N2", text: "JLPT N2" },
    { id: 6, value: "N1", text: "JLPT N1" }
]

interface FilterDropdownProps {
    setSelectedLevel: (level: LevelKey) => void
}

export default function FilterDropdown({ setSelectedLevel }: FilterDropdownProps) {
    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedLevel(e.target.value as LevelKey)
    }

    return (
        <div>
            <select
                className="border-2 border-solid p-2 text-center"
                onChange={handleChange}
            >
                {levels.map(level => (
                    <option
                        className="bg-black"
                        key={level.id}
                        value={level.value}
                    >
                        {level.text}
                    </option>
                ))}
            </select>
        </div>
    )
}
