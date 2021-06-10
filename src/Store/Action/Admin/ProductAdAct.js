import AxiosConfig from "../../../Configs/Axios"
import { notify } from "../../../Services/Alert"

export const fetchProductAdminAct = (conf) => {
    console.log("conf", conf);
    return async dispatch => {
        dispatch({ type: "FETCH_PRODUCT-ADMIN_REQUEST" })
        try {
            const { data } = await AxiosConfig.get('/product?perPage=20&with=categories,productImages', conf)
            if (data) {
                dispatch({ type: "FETCH_PRODUCT-ADMIN_SUCCESS", payload: data.data })
            }
        } catch (error) {
            console.log("err fetch product admin", error);
        }
    }
}
export const fetchProductDetailAdminAct = (id) => {
    const admin_token = localStorage.getItem('currentAdmin') ?
        JSON.parse(localStorage.getItem('currentAdmin')).access_token
        : null;
    const config = {
        headers: { Authorization: `bearer ${admin_token}` }
    };
    return async dispatch => {
        dispatch({ type: "FETCH_PRODUCTDETAIL-ADMIN_REQUEST" })
        try {
            const { data } = await AxiosConfig.get(`/product/${id}`, config)
            if (data) {
                dispatch({ type: "FETCH_PRODUCTDETAIL-ADMIN_SUCCESS", payload: data.data })
            }
        } catch (error) {
            console.log("err fetch product detail admin", error);
        }
    }
}
export const fetchCategoryAdminAct = (conf) => {

    return async dispatch => {
        dispatch({ type: "FETCH_CATEGORY-ADMIN_REQUEST" })
        try {
            const { data } = await AxiosConfig.get('/category?perPage=20&with=subCategory', conf)
            if (data) {
                dispatch({ type: "FETCH_CATEGORY-ADMIN_SUCCESS", payload: data.data })
            }
        } catch (error) {
            console.log("err fetch category admin", error);
        }
    }
}
// image, name, description, price, quantities, categories
export const updateProductAdminAct = (image, name, description, price, quantities, categories, id) => {
    const admin_token = localStorage.getItem('currentAdmin') ?
        JSON.parse(localStorage.getItem('currentAdmin')).access_token
        : null;
    const config = {
        headers: { Authorization: `bearer ${admin_token}` }
    };
    console.log(id, image, categories);
    AxiosConfig.patch(`/product/${id}`, { image, name, description, price, quantities, categories }, config).then(res => {
        if (res) {
            notify("success", "UPDATE SUCCESSFULL !!!")
        }
    }).catch(error => {
        console.log("err update product", error);
        notify("error", "UPDATE FAIL !!!")
    })

}
    // console.log("dataUpdate", categories);
    // return 
    // try {
    //     const { data } = await AxiosConfig.patch(`/product/${id}`, { image, name, description, price, quantities, categories }, config)
    //     if (data) {
    //         notify("success", "UPDATE SUCCESSFULL !!!")
    //     }
    // } catch (error) {
    //     console.log("err update product", error);
    //     notify("error", "UPDATE FAIL !!!")
    // }
