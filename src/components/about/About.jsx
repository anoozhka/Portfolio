import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaGraduationCap} from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'

const About = () => {

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
<div className='container about__container'>
  <div className='about__me'>
    <div class="about__me-image">
        <img src={ME} alt="About Image" />
    </div>
  </div>

<div className='about__content'>
  <div className='about__cards'>
    <article className='about__card'>
      <BsFillPersonFill className='about__card-icon'/>
      <h5>Age</h5>
      <small>20 years</small>
    </article>
    <article className='about__card'>
    <FaGraduationCap className='about__card-icon'/>
      <h5>Education</h5>
      <small>BTech Undergrad</small>
    </article>
    <article className='about__card'>
    <MdLocationPin className='about__card-icon'/>
      <h5>Located</h5>
      <small>New Delhi</small>
    </article>
    </div>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </p>
    <a href='#contact' className='btn btn-primary' >Let's Talk</a>
  </div>
</div>
    </section>
  )
}

export default About