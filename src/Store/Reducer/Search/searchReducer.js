export const searchReducer = (state = {}, action) => {
    switch (action.type) {
        case "SEARCH_KEY": {
            return { ...state, keyword: action.payload }
        }
        default: return state
    }

}