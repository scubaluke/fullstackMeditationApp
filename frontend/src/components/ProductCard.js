import React from 'react'

export default function ProductCard({description, mantraListName, header}) {
    return (
    <div className="card text-white bg-secondary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">{header}</div>
            <div className="card-body">
                <h4 className="card-title">{mantraListName}</h4>
                <p className="card-text">{description}</p>
                <button type="button" className="btn btn-info btn-sm">Add to Cart</button>
            </div>
    </div>
    )
}
