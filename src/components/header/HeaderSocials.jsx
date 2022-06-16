import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {GrProductHunt} from 'react-icons/gr'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='https://www.linkedin.com/in/anton-larsson-auna-b8a8b817b/' target='_blank' rel="noreferrer" ><BsLinkedin/></a>
        <a href='https://github.com/xamnotna' target='_blank' rel="noreferrer"  ><BsGithub/></a>
        <a href='https://www.producthunt.com/@ala_himself' target='_blank' rel="noreferrer" > <GrProductHunt/></a>
    </div>
  )
}

export default HeaderSocials