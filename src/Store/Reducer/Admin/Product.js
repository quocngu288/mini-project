export const categoryAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT-ADMIN_REQUEST": {

            return { loading: true }
        }
        case "FETCH_PRODUCT-ADMIN_SUCCESS": {
            const product = action.payload;
            return { loading: false, product }
        }
        default: return state
    }
}