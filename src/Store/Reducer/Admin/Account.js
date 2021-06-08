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