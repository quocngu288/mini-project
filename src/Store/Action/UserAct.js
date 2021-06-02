import AxiosConfig from '../../Configs/Axios'
import { notify } from '../../Services/Alert'


export const register = (email, password) => {
    return async dispatch => {
        try {
            const { data } = await AxiosConfig.post('/register', { email, password })
            if (data) {
                dispatch({ type: 'REGISTER__SUCCESS', payload: data })
                notify('success', 'Đăng kí thành công !')
            }
        } catch (error) {
            console.log("err", error);
            notify('error', 'Đăng kí thất bại !')
        }
    }
}
export const login = (username, password) => {
    return async dispatch => {
        dispatch({ type: 'LOGIN__REQUEST' })
        console.log("data", { username, password });
        try {
            const { data } = await AxiosConfig.post('/login', { username, password })

            if (data) {
                dispatch({ type: 'LOGIN__SUCCESS', payload: data })
                notify('success', 'Đăng nhập thành công !')
            }
        } catch (error) {
            console.log("err", error);
            notify('error', 'Đăng nhập thất bại !')
        }
    }
}
export const logout = () => {
    var access_token = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")).access_token : null;
    const config = {
        headers: { Authorization: `Bearer ${access_token}` }
    };
    return async dispatch => {
        dispatch({ type: "LOGOUT_REQUEST" })
        try {
            const { data } = await AxiosConfig.get('/logout', config)
            if (data) {
                localStorage.removeItem('currentUser')
                dispatch({ type: "LOGOUT_SUCCESS" })
                notify('success', "LOGOUT SUCCESSFULL !")
            }
        } catch (error) {
            notify('error', "LOGOUT FAIL !")
            console.log("lỗi", error);
        }
    }



}