import React from 'react';
import { Provider } from 'react-redux';
import './bootstrap.min.css'
import store from './store'

export default function Root({ children }) {
    
    return (
        <Provider store={store} >
            {children}
        </Provider>
    )
}