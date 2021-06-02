export const updateAddressReducer = (state = { loadingAddress: false }, action) => {
    switch (action.type) {
        case "UPDATE_ADDRESS_REQUEST": {
            return { loadingAddress: true }
        }
        case "UPDATE_ADDRESS_SUCCESS": {
            return {
                loadingAddress: false,

            }
        }
        default: return state
    }

}