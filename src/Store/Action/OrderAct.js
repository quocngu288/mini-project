import AxiosConfig from "../../Configs/Axios"
import { notify } from "../../Services/Alert";

export const orderAct = (cart, conf) => {
    console.log(cart);
    return async dispatch => {
        dispatch({ type: "CHECKOUT_REQUEST" })
        try {
            const { data } = await AxiosConfig.post('/public/checkout', cart, conf)
            if (data) {
                console.log("checkout", data);
                // dispatch({ type: "CHECKOUT_SUCCESS", payload: data })
                notify("success", "CHECKOUT SUCCESSFULL !!!")
                localStorage.removeItem("cart")
            }
        } catch (error) {
            console.log("error checkout", error);
        }
    }
}