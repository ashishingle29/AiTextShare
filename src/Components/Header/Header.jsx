import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div className='header'>
            <div className='header__Logo'>
                <h1>Ai Tools Hub</h1>
            </div>
            <div className='header__Social'>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/aitxt'>Ai Text</NavLink></li>
                    <li><a href='https://github.com/ashishingle29' target='_blank'>Github</a></li>
                    <li><a href='https://www.linkedin.com/in/ashishingle29' target='_blank'>Linkedin</a></li>
                    <li><a href='https://www.facebook.com/Ashish.ingle.786/' target='_blank'>Facebook</a></li>
                    <li><a href='https://ashishingle.netlify.app/' target='_blank'>Website</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header