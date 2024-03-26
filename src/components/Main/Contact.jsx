import React from 'react';
import Heading from '../Heading/Heading';
import FormRow from '../FormRow/FormRow';
import { image12 } from '../../assets';
import Button from '../Button/Button';
import './contact.css'

function Contact() {
  return (
      <section className='contact-section'>
        <Heading>Contact Us</Heading>
        <div className='contact-container'>
          <form className='contact-form'>
            <FormRow name='name'/>
            <FormRow name='Phone Number'/>
            <FormRow name='Email'/>
            <FormRow name='Interested in'/>
            <FormRow name='message'/>
          </form>
          <div className='contact-image-container'>
            <img src={image12} alt="" className='contact-image' />
          </div>
        </div>
        <div className='contact-button'>
          <Button name="SEND EMAIL" img='leftArow' color='black'/>
        </div>
      </section>
 
  );
}

export default Contact;
