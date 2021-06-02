
export const cartReducer = ((state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            // let index = cart.findIndex(sp => sp.id === action.payload.id)
            let cart = [...state]
            if (cart.length === 0) {
                cart.push(action.payload)
                return cart
            } else {
                let check = false;
                cart.map((item, index) => {
                    if (item.id === action.payload.id) {
                        cart[index].count++;
                        check = true
                    }
                })
                if (!check) {
                    let _cart = action.payload;
                    cart.push(_cart)
                }
            }
            console.log("cart", cart);
            localStorage.setItem('cart', JSON.stringify(cart))
            cart = state
            return state
        }
        default: return state
    }
})