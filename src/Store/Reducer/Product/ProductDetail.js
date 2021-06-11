export const productDetailReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "PRODUCT-DETAIL_REQUEST": {
            return { loading: true }
        }
        case "PRODUCT-DETAIL_SUCCESS": {
            return { loading: false, product: action.payload }
        }
        default: return state
    }
}