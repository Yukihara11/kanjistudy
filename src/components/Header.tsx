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
        <div className="justify-items-center border-b-2 border-solid mb-4">
            <h1 className="md:text-7xl text-3xl pt-7 font-bold font-mono">
                ようこそ
            </h1>
            <nav className="p-7">
                <ul className="flex flex-row basis-64">
                    {navButtons.map(button => (
                        <li key={button.id}>
                            <button
                                className="rounded-2xl border-solid border-2 p-2 m-2 hover:text-3xl hover:cursor-pointer hover:bg-emerald-400 hover:duration-800 ease-in-out"
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
