import {useEffect, useRef, useState} from "react";
import KanjivgAnimate from "kanjivganimate"

export default function Kanji({ character,}) {
    const [svg, setSvg] = useState("");
    const containerRef = useRef(null)

    useEffect(() => {
        if (!character) return;

        const codePoint = character.codePointAt(0).toString(16).toLowerCase()
        const paddedCode = codePoint.padStart(5, "0")

        const url = `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg/kanji/${paddedCode}.svg`;


        fetch(url)
            .then((res) => {
                if (!res.ok) throw new Error("SVG not found")
                return res.text()
            })
            .then((svgContent) => {

                const parser = new DOMParser()
                const doc = parser.parseFromString(svgContent, "image/svg+xml")

                const svgEl = doc.querySelector("svg")
                svgEl.classList.add("kanjiVG")

                setSvg(svgEl.outerHTML)
            })
            .catch((err) => console.error("Failed to fetch SVG:", err))
    }, [character])

    useEffect(() => {
        if (!svg) return

        const instance = new KanjivgAnimate(".kanjiVG",700)

        return () => {
            if(instance?.destroy){
                instance.destroy()
            }
        }
    }, [svg]);

    return (
        <div className="flex flex-col justify-center [&>svg]:w-72 [&>svg]:h-72 [&>svg]:bg-white"
            ref={containerRef}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
}
