import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrProductHunt} from 'react-icons/gr'  

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Anton Larsson-Auna</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-social'>
        <a href='https://www.linkedin.com/in/anton-larsson-auna-8005a31b8/' target='_blank' rel='noreferrer'>
          <BsLinkedin/>
        </a>
        <a href='https://github.com/xamnotna' target='_blank' rel='noreferrer'><BsGithub /></a>
        <a href='https://www.producthunt.com/@ala_himself' target='_blank' rel="noreferrer" > <GrProductHunt/></a>
        </div>
        <div className='footer-copyright'>
          <small>&copy; Anton Larsson-Auna. All rights reserved</small>
        </div>
    </footer>
  )
}

export default footer