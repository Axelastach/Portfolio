import React from 'react'
import './index.css'
import Header from '../src/components/header/Header'
import Navbar from './components/nav/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'

import Portfolio from './components/portfolio/Portfolio'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      
      <Portfolio/>
      
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App