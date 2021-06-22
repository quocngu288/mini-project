export const dashboardAdminReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "FETCH_DASHBOARD_REQUEST": {
            return { loading: true }
        }
        case "FETCH_DASHBOARD_SUCCESS": {
            const dashboard = action.payload;
            return { loading: false, dashboard }
        }
        default: return state
    }
}