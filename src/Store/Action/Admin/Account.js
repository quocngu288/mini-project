import AxiosConfig from '../../../Configs/Axios'
import { notify } from '../../../Services/Alert';
export const fetchListAdminAct = (conf) => {
    // console.log(username, password);
    return async dispatch => {
        dispatch({ type: "FETCH_LISTADMIN_REQUEST" });
        try {
            const { data } = await AxiosConfig.get('/admin?perPage=20', conf)
            if (data) {
                dispatch({ type: "FETCH_LISTADMIN_SUCCESS", payload: data.data });
            }

        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchListDetailAdminAct = (id) => {
    const admin_token = localStorage.getItem('currentAdmin') ?
        JSON.parse(localStorage.getItem('currentAdmin')).access_token
        : null;
    const config = {
        headers: { Authorization: `bearer ${admin_token}` }
    };
    return async dispatch => {
        try {
            const { data } = await AxiosConfig.get(`/admin/${id}`, config)
            if (data) {
                console.log('dataAdmin', data);
                // notify('success', 'LOGIN ADMIN SUCCESSFULL')
                dispatch({ type: "FETCH_LISTADMIN-DETAIL_SUCCESS", payload: data.data });
            }

        } catch (error) {
            console.log(error);
        }
    }
}
export const createAdminAct = (dataadmin) => {
    const admin_token = localStorage.getItem('currentAdmin') ?
        JSON.parse(localStorage.getItem('currentAdmin')).access_token
        : null;
    const config = {
        headers: { Authorization: `bearer ${admin_token}` }
    };
    return async dispatch => {
        // dispatch({ type: "FETCH_LISTADMIN_REQUEST" });
        try {
            const { data } = await AxiosConfig.post('/admin', dataadmin, config)
            if (data) {
                console.log('dataAdmin', data);
                notify('success', 'CREATE SUCCESSFULL !!!')
                dispatch({ type: "CREATE_ADMIN_SUCCESS", payload: data.data });
            }

        } catch (error) {
            console.log(error);
            notify('error', 'CREATE FAIL !!!')
        }
    }
}
export const updateAdminAct = (dataadmin, id) => {
    const admin_token = localStorage.getItem('currentAdmin') ?
        JSON.parse(localStorage.getItem('currentAdmin')).access_token
        : null;
    const config = {
        headers: { Authorization: `bearer ${admin_token}` }
    };
    return async dispatch => {

        try {
            const { data } = await AxiosConfig.patch(`/admin/${id}`, dataadmin, config)
            if (data) {
                console.log('dataAdmin', data);
                notify('success', 'CREATE SUCCESSFULL !!!')
                dispatch({ type: "UPDATE_ADMIN_SUCCESS", payload: data.data });
            }

        } catch (error) {
            console.log(error);
            notify('error', 'UPDATE FAIL !!!')
        }
    }

}
export const deleteAdminAct = (id) => {
    const admin_token = localStorage.getItem('currentAdmin') ?
        JSON.parse(localStorage.getItem('currentAdmin')).access_token
        : null;
    const config = {
        headers: { Authorization: `bearer ${admin_token}` }
    };
    return async dispatch => {

        try {
            const { data } = await AxiosConfig.delete(`/admin/${id}`, config)
            if (data) {
                console.log('dataAdmin', data);
                notify('success', 'DELETE SUCCESSFULL !!!')
                dispatch({ type: "DELETE_ADMIN_SUCCESS", payload: id });
            }

        } catch (error) {
            console.log(error);
            notify('error', 'DELETE FAIL !!!')
        }
    }

}