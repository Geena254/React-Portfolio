import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/georgina-kimani" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"><LinkedInIcon /></i>
        </a>
        <a href="https://www.github.com/Geena254" target="_blank" rel="noreferrer">
            <i className="fab fa-github"><GitHubIcon /></i>
        </a>
        <a href="https://www.twitter.com/KimaniSWE" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"><XIcon /></i>
        </a>
        <a href="https://www.instagram.com/_stylazar_" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"><InstagramIcon/></i>
        </a>
    </div>
  )
}

export default Headersocials
