const Newsreducer = ((state, action) => {
    switch (action.type) {
        case "GET_NEWS":
            return {
                ...state,
                getnews:action.payload
            }
    }


})
export default Newsreducer