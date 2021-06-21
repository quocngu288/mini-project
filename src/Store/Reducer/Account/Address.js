export const updateAddressReducer = (state = { loadingAddress: true }, action) => {
    switch (action.type) {
        case "UPDATE_ADDRESS_REQUEST": {
            return { loadingAddress: true }
        }
        case "UPDATE_ADDRESS_SUCCESS": {
            return {
                loadingAddress: false
            }
        }
        case "UPDATE_ADDRESS_FAIL": {
            return {
                loadingAddress: false
            }
        }
        default: return state
    }

}