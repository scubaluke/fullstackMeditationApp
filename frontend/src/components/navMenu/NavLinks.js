import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/userActions'
import './Links.css'
import { Button } from 'react-bootstrap'
// import Nav from 'react-bootstrap/Nav'
// import { NavDropdown } from 'react-bootstrap';


export default function NavLinks({handleClose}) {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } =  userLogin
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout());
    }

    return (
        <div onClick={handleClose} className='list-of-links' >
           {userInfo && ( <div><h5>Welcome {userInfo.name.split(' ')[0]}</h5></div>)}
            <Link to="/home" className='link' >
                Home
            </Link>
            <Link to="/fear" className='link' >
                Fear
            </Link>
            <Link to="/affirmations" className='link' >
                Affirmations
            </Link>
            <Link to="/nsfw" className='link' >
                NSFW
            </Link>
             <Link to="/store" className='link' >
                Store
            </Link>
              {userInfo && ( <Button  className='link' onClick={logoutHandler} >Log Out</Button>)}
        </div>
    )



//     return (  <>
   
//   <Nav className="list-of-links navbar navbar-expand-lg navbar-dark bg-primary" activeKey="/home">
//     {userInfo && (   <Nav.Item>
//             <p>Welcome {userInfo.name.split(' ')[0]}</p>
//             {/* <Nav.Link>Log Out</Nav.Link> */}
//          </Nav.Item>)
//     }
//     <Nav.Item>
//       <Nav.Link eventKey='home' href="/home">Home</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//       <Nav.Link to='/fear' eventKey="link-1">Fear</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//       <Nav.Link to='affirmations' eventKey="link-2">Affirmations</Nav.Link>
//     </Nav.Item>
//     <Nav.Item>
//       <Nav.Link to='/nsfw' eventKey="disabled" >
//         Explicit
//       </Nav.Link>
//     </Nav.Item>
//      <Nav.Item>
//       <Nav.Link to='/store' eventKey="disabled" >
//         Store
//       </Nav.Link>
//     </Nav.Item>
//   </Nav>
//   </>
//   )
}