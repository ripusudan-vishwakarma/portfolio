import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/Main.scss';

function Main() {
  const profile = {
    name: 'Ripusudan Vishwakarma',
    title: 'Platform Engineer',
    email: 'sudan.ripu83@gmail.com',
    location: 'Bengaluru, India',
    linkedin: 'https://www.linkedin.com/in/sudanripu/'
  };

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <div className="avatar-badge">RV</div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>{profile.name}</h1>
          <p>{profile.title}</p>

          <div className="profile-meta">
            <span><LocationOnIcon fontSize="small" /> {profile.location}</span>
            <a href={`mailto:${profile.email}`} className="email-link"><EmailIcon fontSize="small" /> {profile.email}</a>
          </div>

          <div className="mobile_social_icons">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;