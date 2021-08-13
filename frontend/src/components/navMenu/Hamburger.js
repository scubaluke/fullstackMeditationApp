import React, { useState } from 'react'
import NavLinks from './NavLinks'
import './Hamburger.css'
// import meditationLogo from '../../images/greylogo.png'

export default function Hamburger() {
    const [navOpen, setNavOpen] = useState(false)
  
            return (
                <div onClick={() => setNavOpen(prev => !prev)} className='Hamburger' >
                      <div className='hamburgerDropdown' style={{display: navOpen ? 'flex' : 'none'}} >
                        
                       <NavLinks />
                    </div>
                      <img src='../images/greylogo.png' className='img' alt='meditating wifi logo' />
                </div>
            )
}