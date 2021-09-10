import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Login from '../components/Login';
import Loader from '../components/Loader';
import Message from '../components/Message'
import { listProducts } from '../actions/productActions';
import ProductList from '../components/ProductList';

export default function ShopPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const {loading, data, error} = products
    
    useEffect(() => {
        
      dispatch(listProducts())
    }, [dispatch])

       
   
    return (
     <div>
            {/* <Login /> */}
            {loading ? (<Loader />) : error ? (<Message variant='danger' >{error}</Message>) : data && <ProductList products={data} />}
        </div>
    )
}
