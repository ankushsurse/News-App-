import { useContext, useEffect, useState } from "react"
import { newses } from "./Context/NewsAction"
import NewsContext from "./Context/NewsContext"

function Navbar() {
    const { dispatch } = useContext(NewsContext)
    const [text, setText] = useState("")

    const defaultNews = (async (topic) => {
        const data = await newses(topic)
        dispatch({
            type: "GET_NEWS",
            payload: data
        })
        setText("")
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        defaultNews(text)
    }

    useEffect(() => {
        setTimeout(() => {
            defaultNews("india")
        }, 3000);

    }, [])

    const handleClick = (async (topic) => {
        const data = await newses(topic)
        dispatch({
            type: "GET_NEWS",
            payload: data
        })
    })

    return (

        <>
            <nav id="Navbar" className="bg-dark p-3">
                <div className="" id="logo">
                    <marquee behavior="scroll" direction="right" scrollamount="10">
                        <img src="https://static.abplive.com/frontend/images/ABP_Logo_LIVE.svg" alt="" />
                        <img src="https://static.abplive.com/frontend/images/ABP_logo_main.svg" alt="" />
                    </marquee>
                </div>
                <div id="nav_links">
                    <a onClick={() => handleClick("sports")}>SPORTS</a>
                    <a onClick={() => handleClick("politics")}> POLITICS</a>
                    <a onClick={() => handleClick("business")}>BUSINESS</a>
                    <a onClick={() => handleClick("fashion")}>FASHION</a>
                    <a onClick={() => handleClick("entertainment")}>ENTERTAINMENT</a>
                </div>


                <form onSubmit={(e) => handleSubmit(e)} className="d-flex" role="search">
                    <input required value={text} onChange={(e) => setText(e.target.value)} className="form-control me-1 rounded-0" type="search" placeholder="Search any keyword" aria-label="Search" />
                    <button className="btn btn-outline-success rounded-0" type="submit">Search</button>
                </form>
                {/* <form onSubmit={(e) => handleSubmit(e)} className="Search_Box">
                    <input required value={text} onChange={(e) => setText(e.target.value)} type="search" placeholder='"Search any Keyword"' />
                    <button id="Search_button" className="btn btn-success" type='submit'>Search</button>
                </form> */}

            </nav>


        </>
    )
}

export default Navbar
