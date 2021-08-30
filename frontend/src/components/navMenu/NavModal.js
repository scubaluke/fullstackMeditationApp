import React, { useState } from 'react'
import {Modal } from 'react-bootstrap'
import NavLinks from './NavLinks';
import './Hamburger.css'

 function NavModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
};

  return (
    <>
         <img 
         style={{position: 'absolute', zIndex: '200',  right: '20px', top: '10px',}} 
  src='../images/greylogo.png' className='img' alt='meditating WIFI logo' onClick={handleShow} />
 

      <Modal  show={show} onHide={handleClose} >
          <NavLinks handleClose={handleClose} />
      </Modal>
    </>
  );
}

export default NavModal