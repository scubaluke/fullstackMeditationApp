import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAIL } from '../constants/productConstants';
import axios from 'axios';

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_REQUEST })

        const {data} = await axios.get(`/api/products`)

        dispatch({ type: PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ 
            type: PRODUCT_FAIL, 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}