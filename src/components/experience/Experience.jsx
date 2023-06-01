import React from 'react'
import './Experience.css'
import {BsPatchCheckFill,BsGit,BsGithub} from 'react-icons/bs'
import {AiFillHtml5,AiFillSlackCircle} from 'react-icons/ai'
import {IoLogoCss3,IoLogoJavascript,IoLogoNodejs} from 'react-icons/io'
import {SiTailwindcss,SiMysql} from 'react-icons/si'
import {FaReact,FaPhp} from 'react-icons/fa'
import {RiTrelloLine} from 'react-icons/ri'




const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML', icon: <AiFillHtml5 /> },
      { name: 'CSS', icon: <IoLogoCss3 /> },
      { name: 'JavaScript', icon: <IoLogoJavascript /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'React', icon: <FaReact /> },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'NodeJS', icon: <IoLogoNodejs /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PHP', icon: <FaPhp /> },
    ],
  },
  {
    category: 'Organisation Tools',
    items: [
      { name: 'GitBash', icon:<BsGit/> },
      { name: 'Trello', icon:<RiTrelloLine/>  },
      { name: 'GitHub', icon:<BsGithub/>  },
      { name: 'Slack', icon:<AiFillSlackCircle/>  },
    ],
  },
];



const Experience = () => {
  return (
    <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My experience </h2>

            <div className="container experience_container">
              {skills.map((category, index) => (
                <div className={`experience_${category.category}`} key={index}>
                  <h3>{category.category}</h3>
                  <div className="exprience_content">
                    {category.items.map((skill, skillIndex) => (
                      <article className="experience_details" key={skillIndex}>
                      <BsPatchCheckFill className="experience_details-icon" />
                      <h4>
                        {skill.name} {skill.icon}
                      </h4>
                      </article>
              ))}
                  </div>
                  </div>
        ))}
            </div>

    </section>
  )
}

export default Experience