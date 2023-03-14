import { createContext, useReducer } from "react";
import Newsreducer from "./NewsReducer";

// const { createContext, useReducer } = ("react");

const NewsContext = createContext()

export const NewsProvider = (({ children }) => {
    const initialState = {
        getnews: null,
        getweather: []
    }


    const [state, dispatch] = useReducer(Newsreducer, initialState)


    return <NewsContext.Provider value={{
        ...state,
        dispatch
    }}>
        {children}
    </NewsContext.Provider>
})

export default NewsContext

