import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gain-demo.png'
import IMG2 from '../../assets/schedulist.png'
import IMG3 from '../../assets/wordle-clone.PNG'
import IMG4 from '../../assets/lets-vest-readme.png'
import IMG5 from '../../assets/sellpy-concept.png'
import IMG6 from '../../assets/camera-expo.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Gains',
    github: 'https://github.com/xamnotna/Gains',
    demo: 'https://expo.dev/@kingstinct/gains?serviceType=classic&distribution=expo-go',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Schedulist',
    github: 'https://www.schedulist.app/',
    demo: 'https://www.schedulist.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Wordle clone',
    github: 'https://github.com/xamnotna/wordle-clone',
    demo: 'https://wordle-clone.surge.sh/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'LETs VEST',
    github: 'https://github.com/Jesper-dev/fe20tp2_bev_grupp8',
    demo: 'https://lets-vest.surge.sh/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sellpy extension protype',
    github: 'https://github.com/xamnotna/sellpyextd',
    demo: 'https://www.figma.com/proto/wEN9ay1rS7nt2kjkOsoNDg/Sellpy-reparationslokal?node-id=13%3A90&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1',
  },
  {
    id: 6,
    image: IMG6,
    title: 'expo-camera-app',
    github: 'https://github.com/xamnotna/expo-camera-app',
    demo: '',
  }
]



const Portfolio = () => {
  const [hasDemo, checkHasDemo] = useState('')
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio-container'>
        {
          data.map(({ id, image, title, github, demo }) => (
            <article key={id} className='portfolio-item'>
              <div className='portfolio-item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio-item-cta'>
                <a href={github} className='btn' target='_blank' rel='noreferrer'>View Project</a>
                {
                  demo && demo !== '' ? (
                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  )
                    : (<span className='btn btn-primary'>Not Available</span>)

                }
              </div>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio