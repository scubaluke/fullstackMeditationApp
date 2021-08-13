import React from 'react'
import Hamburger from './navMenu/Hamburger'

export default function Layout({ children }) {
    return (
        <>
            <Hamburger/>
            {children}
        </>
    )
}
