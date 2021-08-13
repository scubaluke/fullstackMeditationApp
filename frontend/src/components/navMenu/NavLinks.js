import React from 'react'
import {Link} from 'react-router-dom'
// import styles from '../../styles/Link.module.css'
import './Links.css'

export default function NavLinks() {
    return (
        <div className='list-of-links'>
            <Link to="/home" className='link' >
                Home
            </Link>
            <Link to="/fear" className='link' >
                Overcoming Fear
            </Link>
            <Link to="/affirmations" className='link' >
                Words of Affirmations
            </Link>
            <Link to="/nsfw" className='link' >
                NSFW
            </Link>
             <Link to="/store" className='link' >
                Store
            </Link>
        </div>
    )
}