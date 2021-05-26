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