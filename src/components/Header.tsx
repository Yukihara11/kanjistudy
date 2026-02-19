import { useNavigate } from "react-router-dom"

interface NavButton {
    id: number
    value: string
    nav: string
}

const navButtons: NavButton[] = [
    { id: 1, value: "Home", nav: "/" },
    { id: 2, value: "Study", nav: "/study" },
    { id: 3, value: "Vocabulary", nav: "/vocabularyList" },
    { id: 4, value: "Quiz", nav: "/quiz" }
]

export default function Header() {
    const nav = useNavigate()

    return (
        <div className="border-b-2 border-solid mb-4 text-center">
            <h1 className="text-3xl md:text-7xl pt-7 font-bold font-mono">
                ようこそ
            </h1>
            <nav className="p-4 md:p-7">
                <ul className="flex flex-col md:flex-row flex-wrap justify-center gap-3">
                    {navButtons.map(button => (
                        <li key={button.id}>
                            <button
                                className="rounded-2xl border-2 border-solid px-4 py-2 md:px-6 md:py-3 hover:text-3xl hover:cursor-pointer hover:bg-emerald-400 transition-all duration-300 ease-in-out"
                                type="button"
                                onClick={() => nav(button.nav)}
                            >
                                {button.value}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
