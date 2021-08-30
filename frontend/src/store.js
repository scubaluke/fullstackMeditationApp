import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { contentReducer } from './reducers/ContentReducer'
import { productReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'

// data will always come from local storage (if in local storage)
 const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
 const cartItemsFromStorage = localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')) : []

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    content: contentReducer,
    products: productReducer,
    cart: cartReducer,
})

const middleware = [thunk]
const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
   cart: { cartItems: cartItemsFromStorage }
}

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store


//  const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
