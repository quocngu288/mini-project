// REGISTER__SUCCESS
export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case "REGISTER__SUCCESS": {
            console.log("reducer", action.payload);
            return { userregister: action.payload }
        }
        default: return state
    }
}
export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN__REQUEST": {
            return { loading: true }
        }
        case "LOGIN__SUCCESS": {
            console.log("reducer", action.payload);
            let userLogin = action.payload
            localStorage.setItem("currentUser", JSON.stringify(userLogin))
            return { userLogin, loading: false }
        }
        default: return state
    }
}
export const logoutReducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case "LOGOUT_REQUEST": {
            return { loading: true }
        }
        case "LOGOUT_SUCCESS": {

            return { loading: false }
        }
        default: return state
    }
}
