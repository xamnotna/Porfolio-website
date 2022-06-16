import React from 'react'
import './about.css';
import porfilePic from '../../assets/profile2.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-image'>
            <img src={porfilePic}  alt='about profile' />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FiAward className='about-icon'/> 
              <h5>Experience</h5>
              <small>Newley Examed</small>
            </article>

            <article className='about-card'>
              <FiUsers className='about-icon'/> 
              <h5>Clients</h5>
              <small>internship 6+ months</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/> 
              <h5>Projects</h5>
              <small>worked on 2 Projects</small>
            </article>
          </div>

          <p>
            I am a self taught web developer with a passion for learning and problem solving. I have a background in
            web development and have worked on a wide range of projects. I am currently working on a project called
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About