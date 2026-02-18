export default function Tutorial({source, title, text}) {
    return (
        <div className="flex flex-row mb-10  border-solid border-2 ml-20 mr-20 align-middle">
            <img src={source} alt="#"/>
            <div className="flex flex-col text-center p-9 ml-20  justify-center">
                <h2 className="text-5xl">{title}</h2>
                <p className="mt-20 text-2xl">{text}</p>
            </div>
        </div>
    )
}