import { combineReducers } from 'redux'
import { CategoryReducer, CateProductReducer } from './Product/Category'
import { loginReducer, registerReducer } from './User/User'
export const Reducers = combineReducers({
    CategoryReducer: CategoryReducer,
    CateProductReducer: CateProductReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer
})