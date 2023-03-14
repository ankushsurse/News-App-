import { useContext } from "react"
import Cards from "./Cards"
import NewsContext from "./Context/NewsContext"
function Home() {

    const { getnews } = useContext(NewsContext)
    if (!getnews) {
        return (
            <h1 className="container">Loading...</h1>
        )
    }
    return (
        <>
            <section id="card_continer" className=" p-2 bg-white mt-1">
                <div className=" m-auto w-100 row" style={{ display: 'flex', justifyContent: 'center' }} >
                    {
                        getnews.map((news, index) => <Cards key={index} news={news} />)
                    }
                </div>
            </section>
        </>
    )
}

export default Home
