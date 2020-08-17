import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark"> 
            <Link to="/" className="navbar-brand">React Github</Link>
               
            </nav>
        </div>
    )
}

export default Navbar
