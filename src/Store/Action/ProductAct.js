import AxiosConfig from '../../Configs/Axios'
export const fetchCategory = () => {
    return async dispatch => {
        dispatch({ type: 'CATEGORY_REQUEST' })
        try {
            const { data } = await AxiosConfig.get('/public/sidebar?with=subCategory')
            dispatch({ type: 'CATEGORY_SUCCESS', payload: data.data })
        } catch (error) {
            dispatch({ type: 'CATEGORY_FAIL', payload: error })
        }
    }
}
export const fetchProductByCategory = (id) => {
    return async dispatch => {
        dispatch({ type: "PRODUCT-BY-CATE_REQUEST" })
        try {
            const { data } = await AxiosConfig.get(`/public/category/${id}?with=productImages`)

            dispatch({ type: 'PRODUCT-BY-CATE_SUCCESS', payload: data.data })
        } catch (error) {
            dispatch({ type: 'PRODUCT-BY-CATE_FAIL', payload: error })
        }
    }
}
export const fetchProductDetail = (id) => {
    return async dispatch => {
        dispatch({ type: "PRODUCT-DETAIL_REQUEST" })
        try {
            const { data } = await AxiosConfig.get(`/public/product/${id}?with=productImages,categories`)
            if (data) {
                // console.log(data.data);
                dispatch({ type: 'PRODUCT-DETAIL_SUCCESS', payload: data.data })
            }
        } catch (error) {
            console.log("err", error);
        }
    }
}
export const addToCart = (cource) => {
    return { type: 'ADD_TO_CART', payload: cource }
}
export const increaseCartItem = (id) => {
    return { type: 'INCREASE_CART', payload: id }
}
export const decreaseCartItem = (id) => {
    return { type: 'DECREASE_CART', payload: id }
}
export const deleteCartItem = (id) => {
    return { type: 'DELETE_CART', payload: id }
}