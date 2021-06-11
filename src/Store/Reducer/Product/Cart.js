
export const cartReducer = ((state = { cart: [] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            let item = action.payload;
            let cart = [...state.cart]
            let itemExist = state.cart.find(x => x.id === item.id)
            if (itemExist) {
                cart.map(x =>
                    x.id === itemExist.id ? item : x
                )
            }
            else {
                cart.push(item)
            }
            localStorage.setItem('cart', JSON.stringify(cart))
            state.cart = cart;
            return { ...state }
        }
        case "INCREASE_CART": {
            let cart = [...state.cart]
            let index = cart.findIndex(sp => sp.id === action.payload)
            let qty = action.payload.quantities
            if (index !== -1) {
                if (cart[index].count < qty) {
                    cart[index].count++
                }
                else {
                    cart[index].count = qty
                }
            }

            localStorage.setItem('cart', JSON.stringify(cart))
            state.cart = cart;
            return { ...state }
        }
        case "DECREASE_CART": {
            let cart = [...state.cart]
            let index = cart.findIndex(sp => sp.id === action.payload)
            let qty = action.payload.quantities
            if (index !== -1) {
                if (cart[index].count > 1) {
                    cart[index].count--
                }
                else {
                    cart[index].count = 1
                }
            }
            state.cart = cart;
            localStorage.setItem('cart', JSON.stringify(cart))
            return { ...state }
        }
        case "DELETE_CART": {
            let cart = [...state.cart]
            let filter = cart.filter(sp => sp.id !== action.payload)
            state.cart = filter
            localStorage.setItem('cart', JSON.stringify(filter))

            return { ...state }
        }

        default: return state
    }
})