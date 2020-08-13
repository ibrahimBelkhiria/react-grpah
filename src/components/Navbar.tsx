import React from 'react'
import { Link } from 'react-router-dom'

interface Props {}

function Navbar(props: Props) {
    const {} = props

    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark"> 
            <Link to="/" className="navbar-brand">React Github</Link>
               
            </nav>
        </div>
    )
}

export default Navbar
