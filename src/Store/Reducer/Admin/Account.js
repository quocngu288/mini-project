export const loginAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "CREATE_ADMIN_REQUEST": {

            return { loading: true }
        }
        case "CREATE_ADMIN_SUCCESS": {
            const accountAdmin = action.payload;
            localStorage.setItem("currentAdmin", JSON.stringify(accountAdmin))
            return { loading: true, accountAdmin }
        }
        default: return state
    }
}

export const fetchListAdminReducer = (state = { loading: false, listdata: [] }, action) => {
    switch (action.type) {
        case "FETCH_LISTADMIN_REQUEST": {

            return { loading: true }
        }
        case "FETCH_LISTADMIN_SUCCESS": {
            const newArr = {
                ...state,
                loading: false,
                listdata: action.payload
            };
            state = newArr
            return state
        }
        case "CREATE_ADMIN_SUCCESS": {
            const newArr = {
                ...state,
                loading: false,
                listdata: [...state.listdata, action.payload]
            };
            state = newArr
            return state
        }
        case "UPDATE_ADMIN_SUCCESS": {
            const findIndex = (id) => {
                let result = -1;
                state.listdata.forEach((item, index) => {
                    if (item.id === id) {
                        result = index
                    }
                });
                return result
            }
            const index = findIndex(action.payload.id)
            const data = [...state.listdata]
            data[index] = action.payload
            const newArr = {
                ...state,
                listdata: [...state.listdata, data[index]]
            };
            state = newArr
            return state
        }
        case "DELETE_ADMIN_SUCCESS": {
            const newArr = {
                ...state,
                listdata: state.listdata.filter(sp => sp.id !== action.payload.id)
            };
            state = newArr
            return state
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