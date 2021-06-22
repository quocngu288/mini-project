export const orderAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "FETCH_ORDER_REQUEST": {
            return { loading: true }
        }
        case "FETCH_ORDER_SUCCESS": {
            const order = action.payload;
            return { loading: false, order }
        }
        default: return state
    }
}