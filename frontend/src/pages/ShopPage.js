import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from '../components/Login';
import Shop from '../components/Shop';
import { listProducts } from '../actions/productActions';

export default function ShopPage() {
    // const dispatch = useDispatch()
    // dispatch(products)
    const products = useSelector(state => state.products)

    console.log('shop');
    console.log(products);
    return (
        <div>
            {/* <Login /> */}
            <Shop />
        </div>
    )
}
