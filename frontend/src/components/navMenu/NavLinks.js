import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
// import styles from '../../styles/Link.module.css'
import './Links.css'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap';


export default function NavLinks(props) {
    console.log(props);
    const [show, setShow] = useState(true)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } =  userLogin
    console.log('userLogin', userLogin);
    console.log(userInfo);

    // return (
    //     <div className='list-of-links'>
    //         <Link to="/home" className='link' >
    //             Home
    //         </Link>
    //         <Link to="/fear" className='link' >
    //             Fear
    //         </Link>
    //         <Link to="/affirmations" className='link' >
    //             Affirmations
    //         </Link>
    //         <Link to="/nsfw" className='link' >
    //             NSFW
    //         </Link>
    //          <Link to="/store" className='link' >
    //             Store
    //         </Link>
    //     </div>
    // )
    return (  <>
   
  <Nav className="list-of-links navbar navbar-expand-lg navbar-dark bg-primary" activeKey="/home">
    {userInfo && (   <Nav.Item>
            <p>Welcome {userInfo.name.split(' ')[0]}</p>
            {/* <Nav.Link>Log Out</Nav.Link> */}
         </Nav.Item>)
    }
    <Nav.Item>
      <Nav.Link eventKey='home' href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to='/fear' eventKey="link-1">Fear</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to='affirmations' eventKey="link-2">Affirmations</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link to='/nsfw' eventKey="disabled" >
        Explicit
      </Nav.Link>
    </Nav.Item>
     <Nav.Item>
      <Nav.Link to='/store' eventKey="disabled" >
        Store
      </Nav.Link>
    </Nav.Item>
  </Nav>
  </>
  )
}