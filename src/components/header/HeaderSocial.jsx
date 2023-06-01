import React from 'react'
import {BsLinkedin ,BsGithub} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className="header_social">
        <a href="https://www.linkedin.com/in/axel-picaut-43a522269/" target='_blank' rel="noreferrer"> <BsLinkedin/> </a>
        <a href="https://github.com/Axelastach/" target='_blank' rel="noreferrer"> <BsGithub/> </a>
      

    </div>
  )
}

export default HeaderSocial