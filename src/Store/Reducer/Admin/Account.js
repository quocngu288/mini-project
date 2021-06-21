import { TramRounded } from "@material-ui/icons";

export const loginAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "CREATE_ADMIN_REQUEST": {
            return { loading: true }
        }
        case "CREATE_ADMIN_SUCCESS": {
            const accountAdmin = action.payload;
            return { loading: false, accountAdmin }
        }
        default: return state
    }
}

export const fetchListAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "FETCH_LISTADMIN_REQUEST": {
            return { loading: true }
        }
        case "FETCH_LISTADMIN_SUCCESS": {

            return { ...state, loading: false, listdata: action.payload }
        }
        case "CREATE_DATA_ADMIN_SUCCESS": {
            const newArr = [...state.listdata]
            newArr.push(action.payload)
            return { ...state, listdata: newArr }
        }
        case "UPDATE_ADMIN_SUCCESS": {
            const index = state.listdata.findIndex(data => data.id === action.payload.id)
            console.log("index", index);
            if (index !== -1) {
                let newData = [...state.listdata]
                newData[index] = action.payload
                return { ...state, listdata: newData }
            }
            else return { ...state }

        }
        case "DELETE_ADMIN_SUCCESS": {

            return { ...state, listdata: state.listdata.filter(user => user.id !== action.payload) }
        }
        case "FETCH_LISTADMIN-DETAIL_SUCCESS": {
            const newArr = {
                ...state,
                loading: false,
                listdata_detail: action.payload
            };
            state = newArr
            return state
        }
        default: return state
    }
}