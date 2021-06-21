import AxiosConfig from "../../../Configs/Axios";
import { notify } from "../../../Services/Alert";

export const loginAdminAct = (username, password) => {
    console.log(username, password);
    return async dispatch => {
        dispatch({ type: "CREATE_ADMIN_REQUEST" });
        try {
            const { data } = await AxiosConfig.post('/admin/login', { username, password })
            if (data) {
                localStorage.setItem("currentAdmin", JSON.stringify(data))
                dispatch({ type: "CREATE_ADMIN_SUCCESS", payload: data });
                notify('success', 'LOGIN ADMIN SUCCESSFULL')
            }
        } catch (error) {
            notify('error', 'LOGIN ADMIN FAIL !!!')
        }
    }
}
export const logOutAdminAct = (conf) => {
    AxiosConfig.get('/admin/logout', conf).then(res => {
        if (res) {
            localStorage.removeItem("currentAdmin")
            notify("success", "LOGOUT SUCCESSFULL !!!")
        }
    }).catch(err => {
        console.log(err);
        if (err) {
            notify("error", "LOGOUT FAIL !!!")
        }
    })

}