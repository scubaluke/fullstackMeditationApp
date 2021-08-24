import React from 'react'
import ProductCard from './ProductCard';

export default function ProductList({products}) {

     const renderProducts = products.map(product => {
            return <ProductCard title={product.name} description={product.description} />
        })
    return (
        <div>
           <h2>Products</h2>
           <p>Send mindful messages daily to yourself or share them with others</p>
                {renderProducts}
        </div>
    )
}
