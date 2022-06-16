import React, { useRef } from 'react';
import './contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
import config from '../../config';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(config.serviceID, config.templateID, form.current, config.publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <AiOutlineMail className='contact-icon'/>
            <h4>Email</h4>
            <h5>antonlarssonauna@gmail.com</h5>
            <a href='mailto:antonlarssonauna@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact-option'>
            <BsLinkedin className='contact-icon'/>
            <h4>LinkedIn</h4>
            <h5>Anton Larsson-Auna</h5>
            <a href='https://www.linkedin.com/in/anton-larsson-auna-8005a31b8/' target='_blank' rel='noreferrer'>Add me on LinkedIn</a>
          </article>
          <article className='contact-option'>
            <BsGithub className='contact-icon'/>
            <h4>GitHub</h4>
            <h5>xamnotna</h5>
            <a href='https://github.com/xamnotna' target='_blank' rel='noreferrer'>Check out my GitHub</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact