import AxiosConfig from '../../Configs/Axios'
import { notify } from '../../Services/Alert'
var access_token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).access_token : null;
const config = {
    headers: { Authorization: `Bearer ${access_token}` }
};
export const fetchProfileUser = () => {
    return async dispatch => {
        dispatch({ type: "FETCH_PROFILE_REQUEST" })
        try {
            const { data } = await AxiosConfig.get('/me', config)
            if (data) {
                console.log(data);
                dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: data })
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
            const { data } = await AxiosConfig.patch('/profile', { firstname, lastname, username, email }, config)
            if (data) {
                console.log(data);
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
            const { data } = await AxiosConfig.patch('/profile/changepass', { password, password_confirmation }, config)
            if (data) {
                console.log(data);
                notify('success', 'Update SUCCESSFULL !')
            }
        } catch (error) {
            console.log(error);
            notify('error', 'Update FAIL !')
        }
    }
}
export const changeAddress = (address, phone) => {
    return async dispatch => {
        dispatch({ type: "UPDATE_ADDRESS_REQUEST" })
        try {
            const { data } = await AxiosConfig.patch('/profile/changeaddress', { address, phone }, config)
            if (data) {
                console.log(data);
                notify('success', 'Update SUCCESSFULL !')
            }
        } catch (error) {
            console.log(error);
            notify('error', 'Update FAIL !')
        }
    }
}