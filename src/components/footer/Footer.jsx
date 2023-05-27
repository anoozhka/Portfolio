import React from 'react'
import './footer.css'

import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="a" className='footer__logo'>Anushka</a>
      
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/anushka-janoti-1335a411a/"><BsLinkedin /></a>
        <a href="https://github.com/anoozhka"><BsGithub /></a>
        <a href="https://twitter.com/anuchkabear"><BsTwitter /></a>
        <a href="https://www.instagram.com/anuchka_bear/"><FiInstagram /></a>
      </div>

    </footer>
  )
}

export default Footer