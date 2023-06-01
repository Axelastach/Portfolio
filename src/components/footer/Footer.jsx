import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Axel</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>


      <div className="footer_copyright">
        <small>&copy; Axel Picaut </small>
      </div>

    </footer>
  )
}

export default Footer