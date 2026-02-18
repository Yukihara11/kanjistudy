const levels = [
    { id: 1, value: "jouyou", text: "Jouyou" },
    { id: 2, value: "N5", text: "JLPT N5" },
    { id: 3, value: "N4", text: "JLPT N4" },
    { id: 4, value: "N3", text: "JLPT N3" },
    { id: 5, value: "N2", text: "JLPT N2" },
    { id: 6, value: "N1", text: "JLPT N1" }
];

export default function FilterDropdown({ setSelectedLevel }) {

    function handleChange(e) {
        setSelectedLevel(e.target.value);
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
    );
}
