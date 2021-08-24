import React from 'react'
import ProductCard from './ProductCard';
import './css/ProductList.css'
export default function ProductList({products}) {

     const renderProducts = products.map(product => {
            return <ProductCard header={product.header} description={product.description} mantraListName={product.mantraListName} />
        })
    return (
        <div className='product-list-container' >
           <h2 className='product-list-header text-info' >Products</h2>
           <p>Send mindful messages daily to yourself or share them with others</p>
           <div className="products-container">
                {renderProducts}
           </div>
        </div>
    )
}
