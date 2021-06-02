
export const orderReducer = ((state = { loading: false }, action) => {
    switch (action.type) {
        case "CHECKOUT_REQUEST": {
            return { loading: true }
        }
        default: return state
    }
})