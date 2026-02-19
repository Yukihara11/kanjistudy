// Define the structure of a link
interface Link {
    id: number
    value: string
    text: string
}

const links: Link[] = [
    { id: 1, value: "https://kanjiapi.dev/", text: "KanjiApi" },
    { id: 2, value: "https://kanjivg.tagaini.net/", text: "KanjiVG" },
    {id:3, value: "https://github.com/nihongodera/kanjivganimate/tree/master", text:"kanjivganimate"},

]

export default function Introduction() {
    return (
        <div className="justify-items-center text-2xl/10  text-center mb-7">
            <h2 className="text-5xl underline underline-offset-8 font-extrabold font-mono mb-4">
                Welcome to KanjiStudy
            </h2>

            <p className="mb-4">
                This Website contains all <strong>~2000</strong> Jouyoukanji. It is here to provide everyone with
                meanings, readings, and stroke order of Kanji to help you learn easier. Below you will find a short
                tutorial on what each tab beholds and how to use the website correctly.
            </p>

            <h3 className="mb-4">
                This Website was made with many different publicly available resources:
            </h3>

            <ul>
                {links.map(link => (
                    <li key={link.id}>
                        <a
                            className="hover:underline hover:font-bold hover:text-3xl hover:duration-400 ease-in list-disc list-outside list-item mt-5"
                            href={link.value}
                        >
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
