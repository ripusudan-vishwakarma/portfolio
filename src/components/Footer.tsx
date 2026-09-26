import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/sudanripu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:sudan.ripu83@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="tel:+91 8889390068" target="_blank" rel="noreferrer"><PhoneIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;