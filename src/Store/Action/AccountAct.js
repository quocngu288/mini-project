import AxiosConfig from '../../Configs/Axios'
import { notify } from '../../Services/Alert'
var access_token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).access_token : null;
const config = {
    headers: { Authorization: `Bearer ${access_token}` }
};
export const fetchProfileUser = (conf) => {
    return async dispatch => {
        dispatch({ type: "FETCH_PROFILE_REQUEST" })
        try {
            const { data } = await AxiosConfig.get('/public/me', conf)
            if (data) {
                console.log("data profile", data);
                dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: data.data })
            }
        } catch (error) {
            console.log(error);
        }
    }
}
export const updateProfile = (firstname, lastname, username, email) => {
    return async dispatch => {
        dispatch({ type: "UPDATE_PROFILE_REQUEST" })
        try {
            const { data } = await AxiosConfig.patch('/public/profile', { firstname, lastname, username, email }, config)
            if (data) {
                notify('success', 'Update SUCCESSFULL !')
            }
        } catch (error) {
            console.log(error);
            notify('error', 'Update FAIL !')
        }
    }
}
export const changePassword = (password, password_confirmation) => {
    return async dispatch => {
        dispatch({ type: "UPDATE_PASSWORD_REQUEST" })
        try {
            const { data } = await AxiosConfig.patch('/public/profile/changepass', { password, password_confirmation }, config)
            if (data) {
                notify('success', 'Update SUCCESSFULL !')
            }
        } catch (error) {
            console.log(error);
            notify('error', 'Update FAIL !')
        }
    }
}
export const changeAddress = (address, phone, conf) => {

    return async dispatch => {
        dispatch({ type: "UPDATE_ADDRESS_REQUEST" })
        try {
            const { data } = await AxiosConfig.patch('/public/profile/changeaddress', { address, phone }, conf)
            if (data) {
                dispatch({ type: "UPDATE_ADDRESS_SUCCESS", payload: data.data })
                notify('success', 'Update SUCCESSFULL !')
            }
        } catch (error) {
            console.log(error);
            notify('error', 'Update FAIL !')
        }
    }
}