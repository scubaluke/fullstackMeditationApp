import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer } from './reducers/userReducers'
import { contentReducer } from './reducers/ContentReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    content: contentReducer,
})

const middleware = [thunk]
const initialState = {}

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store

//  const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

// // data will always come from local storage (if in local storage)
//  const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

//  const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

// const initialState = {
//     cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
//     userLogin: { userInfo: userInfoFromStorage }
// }