import AxiosConfig from "../../../Configs/Axios"
import { notify } from "../../../Services/Alert"

export const fetchProductAdminAct = (conf) => {
    console.log("conf", conf);
    return async dispatch => {
        dispatch({ type: "FETCH_PRODUCT-ADMIN_REQUEST" })
        try {
            const { data } = await AxiosConfig.get('/product?perPage=20&with=categories,productImages', conf)
            if (data) {
                console.log("datapro", data);
                dispatch({ type: "FETCH_PRODUCT-ADMIN_SUCCESS", payload: data.data })
            }
        } catch (error) {
            console.log(error);
        }
    }
}