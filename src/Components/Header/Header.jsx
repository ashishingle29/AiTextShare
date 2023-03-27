import React from 'react'
// import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
// import { RxAvatar } from 'react-icons/rx'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            <div className='header__Logo'>
                <h1>Ai Tools Hub</h1>
            </div>
            <div className='header__Social'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/aitxt'>Ai Text</a></li>
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