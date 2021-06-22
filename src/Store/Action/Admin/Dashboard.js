import AxiosConfig from "../../../Configs/Axios";
import { notify } from "../../../Services/Alert";

export const fetchDashboardAdminAct = (config) => {
    // const config = {
    //     headers: { Authorization: `bearer ${admin_token}` }
    // };
    return async dispatch => {
        dispatch({ type: "FETCH_DASHBOARD_REQUEST" });
        try {
            const { data } = await AxiosConfig.get('/statistic', config)
            if (data) {
                console.log("data dashboard",data);
                dispatch({ type: "FETCH_DASHBOARD_SUCCESS", payload: data.data });
       
            }

        } catch (error) {
            console.log(error);
        }
    }
}