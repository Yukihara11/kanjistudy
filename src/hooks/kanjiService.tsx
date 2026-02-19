export interface Variant {
    written?: string
    pronounced?: string
}

export interface Meaning {
    glosses: string[]
}

export interface Word {
    variants: Variant[]
    meanings: Meaning[]
}

export async function fetchKanjiWords(kanji: string): Promise<Word[]> {
    const res = await fetch(`https://kanjiapi.dev/v1/words/${kanji}`)

    if (!res.ok) {
        throw new Error("Kanji not Found")
    }

    return res.json()
}
