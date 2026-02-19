import Introduction from "../components/Homeroute/Introduction"
import Tutorial from "../components/Homeroute/Tutorial"

export default function HomeRoute() {
    return (
        <div>
            <Introduction />
            <Tutorial
                source="https://placehold.co/400x400"
                title="Study"
                text="Study will list all available Jouyou Kanji. Each one of them is interactable and will load a Detailed View of the Kanji with meanings/readings and more. Further more there is a Filter and search function if you are looking for a specific Kanji"
            />
            <Tutorial
                source="https://placehold.co/400x400"
                title="Test"
                text="Test will generate a short randomized Kanji test of a certain side which you can select yourself. You can also choose what form of test it will be. Kanji -> shows you a Kanji and has you choose the meaning or Reading | Meaning -> Shows you the meaning and has you choose the right Kanji | Reading -> shows you the readings and has you choose the right Kanji"
            />
        </div>
    )
}
