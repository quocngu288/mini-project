import AxiosConfig from '../../Configs/Axios'
export const fetchCategory = () => {
    return async dispatch => {
        dispatch({ type: 'CATEGORY_REQUEST' })
        try {
            const { data } = await AxiosConfig.get('/sidebar?with=subCategory')
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
            const { data } = await AxiosConfig.get(`/category/${id}?with=productImages`)
            console.log(data);
            dispatch({ type: 'PRODUCT-BY-CATE_SUCCESS', payload: data.data })
        } catch (error) {
            dispatch({ type: 'PRODUCT-BY-CATE_FAIL', payload: error })
        }
    }
}
