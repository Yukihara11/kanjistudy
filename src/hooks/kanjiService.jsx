
export async function fetchKanjiWords(kanji){
    const res = await fetch(`https://kanjiapi.dev/v1/words/${kanji}`)

    if (!res.ok){
        throw new Error("Kanji not Found")
    }

    return res.json()
}