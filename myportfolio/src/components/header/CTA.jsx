import React from 'react'
import CV from '../../assets/GEORGINA KIMANI CV (1).pdf'

const CTA = () => {
  return (
    <div>
        <a href={CV} view className="btn">View CV</a>
        <a href="#contact" className="btn btn-primary">Let's connect</a>
    </div>
  )
}

export default CTA

