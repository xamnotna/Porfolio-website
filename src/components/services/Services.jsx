import React from 'react'
import './services.css'
/* import {AiOutlineCheck} from 'react-icons/ai' */

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services-container'>
      <article className='service'>
        <div className='service-head'>
          <h3>Web Development</h3>
          </div>
            <ul className='service-list'>
              <li>
                {/* <AiOutlineCheck className='service-list-icon' /> */}
                <p>
                  I have build websites from the ground up, from scratch. I use the latest
                  technologies to make sure your website is fast, responsive, and
                  secure.
                </p>
              </li>
            </ul>
      </article>
      <article className='service'>
        <div className='service-head'>
          <h3>Mobile Development</h3>
          </div>
          <ul className='service-list'>
              <li>
                {/* <AiOutlineCheck className='service-list-icon' /> */}
                <p>
                  I have build mobile apps from the ground up, from scratch. I use the latest
                  technologies to make sure your app is fast, responsive, and secure.
                </p>
              </li>
            </ul>
      </article>
      <article className='service'>
        <div className='service-head'>
          <h3>UI/UX Design</h3>
                  </div>
          <ul className='service-list'>
              <li>
                {/* <AiOutlineCheck className='service-list-icon' /> */}
                <p>
                  I will design beautiful, user-friendly interfaces and experiences wich a
                  user can interact with.
                 </p>
              </li>
            </ul>
      </article>
    </div>
    </section>
  )
}

export default Services