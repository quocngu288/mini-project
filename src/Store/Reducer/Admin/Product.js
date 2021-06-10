export const productAdminReducer = (state = { loading: false, products: [] }, action) => {
    switch (action.type) {
        case "FETCH_PRODUCT-ADMIN_REQUEST": {

            return { loading: true }
        }
        case "FETCH_PRODUCT-ADMIN_SUCCESS": {
            const newArr = {
                ...state,
                loading: false,
                products: action.payload
            };
            state = newArr

            return state
        }
        case "ADD_PRODUCT-ADMIN_SUCCESS": {
            const item = action.payload;
            const newArr = {
                ...state,
                loading: false,
                products: [...state.products, item]
            };
            state = newArr

            return state
        }
        // case "DELETE_PRODUCT-ADMIN_SUCCESS": {
        //     const products = action.payload;
        //     return { loading: false, products }
        // }
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