import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <h1>Tools Hub</h1>
            </div>
            <nav className='header__nav'>
                <ul>
                    <li><NavLink to='/' exact="true" >Home</NavLink></li>
                    <li><NavLink to='/aitxt'>Ai Text</NavLink></li>
                    <li><a href='https://github.com/ashishingle29' target='_blank' rel='noreferrer'>Github</a></li>
                    <li><a href='https://www.linkedin.com/in/ashishingle29' target='_blank' rel='noreferrer'>Linkedin</a></li>
                    <li><a href='https://www.facebook.com/Ashish.ingle.786/' target='_blank' rel='noreferrer'>Facebook</a></li>
                    <li><a href='https://ashishingle.netlify.app/' target='_blank' rel='noreferrer'>Website</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
