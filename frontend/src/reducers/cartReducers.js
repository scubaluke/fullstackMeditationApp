import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SENDTO_PHONE} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], sendToPhone: {} }, action) => {
    switch(action.type) {
        case CART_ADD_ITEM:
            const item = action.payload 

            const existsItem = state.cartItems.find(x => x.product === item.product)

            if(existsItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existsItem.product ? item : x)
                }
            } else {
                return {
                    ...state, 
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.product !== action.payload)
            }
        case CART_SAVE_SENDTO_PHONE:
            return {
                ...state,
                sendToPhone: action.payload
            }
        default:
            return state
    }
}

