import { CONTENT_REQUEST, CONTENT_SUCCESS, CONTENT_FAIL } from '../constants/contentConstants';
import axios from 'axios';

export const listContent = () => async (dispatch) => {
    try {
        dispatch({ type: CONTENT_REQUEST })

        const { data } = await axios.get('/api/content')

        dispatch({ type: CONTENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ 
            type: CONTENT_FAIL, 
            payload: error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        })
    }
}