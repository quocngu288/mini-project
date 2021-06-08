import AxiosConfig from "../../Configs/Axios"

export const orderAct = (cart, conf) => {
    console.log(cart);
    return async dispatch => {
        dispatch({ type: "CHECKOUT_REQUEST" })
        try {
            const { data } = await AxiosConfig.post('/public/checkout', cart, conf)
            if (data) {
                console.log("checkout", data);
                // dispatch({ type: "CHECKOUT_SUCCESS", payload: data })
            }
        } catch (error) {
            console.log("error checkout", error);
        }
    }
}