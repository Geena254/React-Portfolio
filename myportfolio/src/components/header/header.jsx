import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile pic.png'
import Headersocials from './headersocials'

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <h5>Hello. I am</h5>
        <h1>Georgina Kimani</h1>
        <h5 className='text-light'>Fullstack Web Developer</h5>
        <CTA />
        <Headersocials />

        <div className="me">
          <img src={ME} alt="Georgina Kimani" />
        </div>

        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}
