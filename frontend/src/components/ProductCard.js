import React, { useState } from 'react'
import { withRouter} from 'react-router-dom';
import { Row, Col, ListGroup, Form } from 'react-bootstrap'
function ProductCard({description, mantraListName, header, productId, history}) {
    const [qty, setQty] = useState(1)

    const addToCart = (e) => {
        const productId = e.target.attributes.product.nodeValue
            history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
    <div className="card text-white bg-secondary mb-3" style={{maxWidth: '20rem'}}>
        <div className="card-header">{header}</div>
            <div className="card-body">
                <h4 className="card-title">{mantraListName}</h4>
                <p className="card-text">{description}</p>
                    <ListGroup.Item fluid='xs'>
                            <Row  >
                            <Col md={6} >Qty</Col>
                            <Col md={4} className="product-page-section">
                                <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {
                                     [...Array(10).keys()].map(x => (
                                      <option value={x + 1} key={x + 1} >{x + 1}</option>
                                     ))
                                    }
                                   
                                </Form.Control>
                            </Col>
                            {/* </Row> */}
                            <Col md={6} >
                            <button product={productId} onClick={e => addToCart(e)} type="button" className="btn btn-info btn-sm">Add to Cart</button>
                            </Col>
                            </Row>
                        </ListGroup.Item>
              
            </div>
    </div>
    )
}

export default withRouter(ProductCard);
