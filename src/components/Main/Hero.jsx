import React from 'react';
import { leftArow, rectangle, rightArow, slideNumber } from '../../assets';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import './hero.css'
const Hero = () => {
  return (
    <main className='hero-container'>
      <section className='hero-section'>
        <div>
          <Heading className='project-heading' >PROJECT</Heading>
          <h1 className='title'>Lorum</h1>
        </div>
        <div className='button-container'>
          <Button img='rightArow'/>
          <Button img='leftArow'/>
        </div>
        <div>
          <img src={slideNumber} alt="slideNumber" />
        </div>
      </section>
      <section className='relative-section'>
        <div className='image-container'>
          <img src={rectangle} alt="" className='image'/>
        </div>
        <div className='button-container'>
          <Button name="VIEW PROJECT" img='leftArow'/>
        </div>
      </section>
    </main>
  );
}

export default Hero;
