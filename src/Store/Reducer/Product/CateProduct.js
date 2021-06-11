export const CategoryReducer = (state = { cateProduct: [], loading: true }, action) => {
    switch (action.type) {
        case "PRODUCT-BY-CATE_REQUEST": {
            return { loading: true }
        }
        case "PRODUCT-BY-CATE_SUCCESS": {
            return { cateProduct: action.payload, loading: false }
        }
        case "PRODUCT-BY-CATE_FAIL": {
            return { errors: action.payload, loading: false }
        }
        default: return state
    }
}