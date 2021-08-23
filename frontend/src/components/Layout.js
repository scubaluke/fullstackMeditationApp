import React from 'react'
import NavModal from './navMenu/NavModal'

export default function Layout({ children }) {
    return (
        <>
            <NavModal />
            {children}
        </>
    )
}
