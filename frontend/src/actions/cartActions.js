import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            header: data.header,
            mantraListName: data.mantraListName,
            image: data.image,
            price: data.price,
            description: data.description,
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}