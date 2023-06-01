import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/img_my_tube_portflio.png';
import IMG2 from '../../assets/happy-poo.png'
import IMG3 from '../../assets/don_t_eat_python.png'
import IMG4 from '../../assets/wild_note.png'

const projects = [
  {
    title: 'My Tube',
    image: IMG1,
    githubLink: 'https://github.com/Axelastach/MyTube',
    liveDemoLink: 'https://6469ee263e59cb62934c335c--sparkling-cuchufli-00ac79.netlify.app/',
  },
  {
    title: 'Happy POO',
    subtitle:'Mobile first',
    image: IMG2,
    githubLink: 'https://github.com/Axelastach/Hackathon_1',
    liveDemoLink: 'https://hackathon-1-mocha.vercel.app/',
  },
  {
    title: `Don't Eat Python  At Lunch`,
    image: IMG3,
    githubLink: 'https://github.com/Axelastach/Projet-1-The-Wild-Eats',
    liveDemoLink: 'https://wild-eat.vercel.app/',
  },
  {
    title: 'Wild Note',
    subtitle:'Mobile first and spotify API key',
    image: IMG4,
    githubLink: 'https://github.com/Axelastach/2023-02-js-btz-wild-note',
    liveDemoLink: 'https://wild-note.vercel.app/',
  },



];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {projects.map((project, index) => (
          <article className="portfolio_item" key={index}>
            <div className="portfolio_item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <h5>{project.subtitle}</h5>
            <div className="portfolio_item-cta">
              <a href={project.githubLink} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={project.liveDemoLink} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
