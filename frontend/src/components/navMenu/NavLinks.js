import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/userActions'
import './Links.css'
// import { Button } from 'react-bootstrap'
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
           {userInfo && (<Link to='/profile' className='welcome' >Welcome {userInfo.name.split(' ')[0]}</Link>)}
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
             <Link to="/shop" className='link' >
                Store
            </Link>
              {/* {userInfo && ( <Button  className='link' onClick={logoutHandler} >Log Out</Button>)} */}
            {userInfo ? ( <Link to='/home'  className='link' onClick={logoutHandler} >Log Out</Link>)  : (<Link className='link' to='/login' >Log In</Link>)}
        </div>
    )
}