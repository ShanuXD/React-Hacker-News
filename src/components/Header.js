import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="logo">Hacker News</Link>
                <ul className="navbar__links">
                    <li><Link className="nav-link" to="/top">Top Stories</Link></li>
                    <li><Link className="nav-link" to="/new">New Stories</Link></li>
                    <li><Link className="nav-link"  to="/best">Best Stories</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
