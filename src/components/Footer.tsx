import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/sudanripu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:sudan.ripu83@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Connect with me on <a href="https://www.linkedin.com/in/sudanripu/" target="_blank" rel="noreferrer">LinkedIn</a></p>
    </footer>
  );
}

export default Footer;