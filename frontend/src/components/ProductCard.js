import React from 'react'
import { Route , withRouter} from 'react-router-dom';

function ProductCard({description, mantraListName, header, productId, history}) {

    const addToCart = (e) => {
        console.log(e.target.attributes.product.nodeValue);
        const productId = e.target.attributes.product.nodeValue
            history.push(`/cart/${productId}`)

    }
    return (
    <div className="card text-white bg-secondary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">{header}</div>
            <div className="card-body">
                <h4 className="card-title">{mantraListName}</h4>
                <p className="card-text">{description}</p>
                <button product={productId} onClick={e => addToCart(e)} type="button" className="btn btn-info btn-sm">Add to Cart</button>
            </div>
    </div>
    )
}

export default withRouter(ProductCard);
