import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>
    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
  <p>Oh Snap!</p>
    {children}
    </Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message