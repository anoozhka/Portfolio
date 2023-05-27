import React from 'react'
import './header.css'
import Typed from 'react-typed'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anushka</h1>
        <Typed className="text-light"
                strings={[
                    'Development',
                    'Data Structures',
                    'Machine Learning']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
        <CTA />
        <HeaderSocial />
        <div className='me'>
            <img src={ME} alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down---></a>
       </div>
    </header>
  )
}

export default Header