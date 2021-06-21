export const productAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT-ADMIN_REQUEST": {

            return { loading: true }
        }
        case "FETCH_PRODUCT-ADMIN_SUCCESS": {

            return { ...state, loading: false, products: action.payload }
        }
        case "ADD_PRODUCT-ADMIN_SUCCESS": {
            const newArr = [...state.products]
            newArr.push(action.payload)
            return { ...state, products: newArr }
        }
        case "DELETE_PRODUCT_ADMIN": {
            return { ...state, products: state.products.filter(sp => sp.id !== action.payload) }
        }
        default: return state
    }
}
export const productDetailAdminReducer = (state = { loadingDetail: false }, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTDETAIL-ADMIN_REQUEST": {

            return { loadingDetail: true }
        }
        case "FETCH_PRODUCTDETAIL-ADMIN_SUCCESS": {
            const product_detail = action.payload;
            return { loadingDetail: false, product_detail }
        }
        default: return state
    }
}
export const categoryAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "FETCH_CATEGORY-ADMIN_REQUEST": {

            return { loading: true }
        }
        case "FETCH_CATEGORY-ADMIN_SUCCESS": {
            const category = action.payload;
            return { loading: false, category }
        }
        default: return state
    }
}