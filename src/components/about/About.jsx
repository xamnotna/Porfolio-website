import React from 'react'
import './about.css';
//import porfilePic from '../../assets/profile2.jpg'
import porfilePic_01 from '../../assets/img_01.png'
import porfilePic_02 from '../../assets/img_02.png'
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
          <div >
            <img src={porfilePic_01}  alt='about profile' className='image img-01'/>
            <img src={porfilePic_02}  alt='about profile' className='image img-02' />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <FiAward className='about-icon'/> 
              <h5>Experience</h5>
              <small>Newley graduated</small>
            </article>

            <article className='about-card'>
              <FiUsers className='about-icon'/> 
              <h5>Work</h5>
              <small>internship 6+ months</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon'/> 
              <h5>Projects</h5>
              <small>worked on several Projects</small>
            </article>
          </div>

          <p>
            I'm a graduate frontend developer with a passion for learning and problem solving. I have a background in
            frontend development and Ux/UI design. I have a passion for learning new technologies and I'm always
            looking for new ways to improve my skills.
          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About