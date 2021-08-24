import React from 'react'

export default function ProductCard({description, title}) {
    return (
    <div className="card text-white bg-secondary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">Header</div>
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="card-text">{description}</p>
            </div>
    </div>
    )
}
