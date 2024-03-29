import React from 'react';
import { logo } from '../../assets';
import { contact, navLinks, socialMedia } from '../../constants';
import './footer.css'
import footerLogo from '../../assets/footerlogo.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='logo-container'>
            <img src={footerLogo} alt="Logo" className='logo'/></div>
        <div className='information'>
          <h1 className='section-title'>Information</h1>
          <ul className='information-list'>
            {navLinks.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className='contacts'>
            <h1 className='section-title'>Contacts</h1>
          <ul className='contacts-list'>
            <li>
              <div className="contact-item">
                <img src={contact.addressIcon} alt="Address Icon" className="contact-icon" />
                <span>{contact.address}</span>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <img src={contact.emailIcon} alt="Email Icon" className="contact-icon" />
                <span>{contact.email}</span>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <img src={contact.phoneIcon} alt="Phone Icon" className="contact-icon" />
                <span>{contact.phone}</span>
              </div>
            </li>
          </ul>
        </div>
        <div className='social-media'>
            <h1 className='section-title'>Social Media</h1>
          <ul className='social-media-list'>
            {socialMedia.map((media,index)=><li key={index} className='social-media-item'><img src={media} alt=""/></li>)}
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>©2024 All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
