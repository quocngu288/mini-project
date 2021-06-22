import AxiosConfig from "../../../Configs/Axios";

export const fetchOrderdAdminAct = (config) => {
    // const config = {
    //     headers: { Authorization: `bearer ${admin_token}` }
    // };
    return async dispatch => {
        dispatch({ type: "FETCH_ORDER_REQUEST" });
        try {
            const { data } = await AxiosConfig.get('/bill?perPage=2', config)
            if (data) {
                console.log("data order",data);
                dispatch({ type: "FETCH_ORDER_SUCCESS", payload: data.data });
            }

        } catch (error) {
            console.log(error);
        }
    }
}