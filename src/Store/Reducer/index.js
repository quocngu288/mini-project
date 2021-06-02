import { combineReducers } from 'redux'
import { updateAddressReducer } from './Account/Address'
import { fetchProfileReducer } from './Account/ProfileReducer'
import { orderReducer } from './Order/Order'
import { cartReducer } from './Product/Cart'
import { CategoryReducer, CateProductReducer } from './Product/Category'
import { productDetailReducer } from './Product/ProductDetail'
import { loginReducer, registerReducer, logoutReducer } from './User/User'
export const Reducers = combineReducers({
    CategoryReducer: CategoryReducer,
    CateProductReducer: CateProductReducer,
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    logoutReducer: logoutReducer,
    productDetailReducer: productDetailReducer,
    cartReducer: cartReducer,
    updateAddressReducer: updateAddressReducer,
    fetchProfileReducer: fetchProfileReducer,
    orderReducer: orderReducer

})