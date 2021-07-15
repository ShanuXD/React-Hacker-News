import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home">
            <ul className="btns">
                <Link to='/top'>Top Stories</Link>
                <Link to='/new'>New Stories</Link>
                <Link to='/best'>Best Stories</Link>
                <a className="btn--github" href='https://github.com/ShanuXD/React-Hacker-News'>Source Code</a>
            </ul>
        </div>
    )
}

export default Home
