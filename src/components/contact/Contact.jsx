import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import {MdOutlineWhatsapp} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'; 


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_g9ml7fw', 'template_6b80qwq', form.current, 't7ulnk1uuQ2GUkaBC')
  
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>anushkajanoti@gmai.com</h5>
            <a href="mailto:anushkajanoti@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>linkedin.com/in/anushka-janoti-1335a411a/</h5>
            <a href="https://www.linkedin.com/in/anushka-janoti-1335a411a/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 9354210464</h5>
            <a href="https://api.whatsapp.com/send?phone=9354210464" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact