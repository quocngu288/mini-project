export const fetchProfileReducer = (state = { loadingProfile: false }, action) => {
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
        default: return state
    }

}