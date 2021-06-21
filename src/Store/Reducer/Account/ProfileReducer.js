export const fetchProfileReducer = (state = { loadingProfile: true }, action) => {
    switch (action.type) {
        case "FETCH_PROFILE_REQUEST": {
            return { loadingProfile: true }
        }
        case "FETCH_PROFILE_SUCCESS": {
            return {
                loadingProfile: false,
                profile: action.payload
            }
        }
        case "FETCH_PROFILE_FAIL": {
            return {
                loadingProfile: false
            }
        }
        default: return state
    }

}