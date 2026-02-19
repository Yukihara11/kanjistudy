interface SearchInputProps {
    value: string
    onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <input
            type="text"
            placeholder="Search vocabulary..."
            value={value}
            onChange={e => onChange(e.target.value)}
            className="border p-2 rounded w-80 mt-4"
        />
    )
}
