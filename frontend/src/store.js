import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { contentReducer } from './reducers/ContentReducer'
import { productReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers'

// data will always come from local storage (if in local storage)
 const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
 const cartItemsFromStorage = localStorage.getItem('cartItems') ?  JSON.parse(localStorage.getItem('cartItems')) : []
 const sendToPhoneFromStorage = localStorage.getItem('sendToPhone') ? JSON.parse(localStorage.getItem('sendToPhone')) : {}

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile:  userUpdateProfileReducer,
    content: contentReducer,
    products: productReducer,
    cart: cartReducer,
})

const middleware = [thunk]
const initialState = {
   userLogin: { userInfo: userInfoFromStorage },
   cart: { cartItems: cartItemsFromStorage, sendToPhone: sendToPhoneFromStorage }
}

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store



