import React from 'react';
import Heading from '../../components/Heading/Heading';
import { contact } from '../../constants';
import Button from '../../components/Button/Button';
import './contact.css'
const Contact = () => {
  return (
    <div className='contact-container'>
      <section className='contact-info'>
        <div>
          <Heading>Contact</Heading>
          <h1 className='contact-info-heading'>Information</h1>
        </div>
        <div className='contact-details'>
          <h1 className='company-name'>{contact.company}</h1>
          <p className='address'>{contact.address}</p>
          <h1 className='phone'>{contact.phone}</h1>
          <p className='email'>{contact.email}</p>
          <div>
            <Button color='black' name='CONTACT US'/>
          </div>
        </div>
      </section>
      <section className='contact-map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.564999589149!2d80.22835409039162!3d13.042593646466964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5da2371%3A0x4954f49743f04af0!2sT.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711088293916!5m2!1sen!2sin" 
          className='map-iframe'
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </section>
    </div>
  );
}

export default Contact;
